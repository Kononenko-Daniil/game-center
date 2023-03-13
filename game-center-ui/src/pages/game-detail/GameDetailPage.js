import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Center from "../../components/flex/Center";
import VStack from "../../components/flex/VStack";
import Rating from "../../components/rating/Rating";
import { API_URL } from "../../env";
import games from "../../games";

const GameDetailPage = () => {
    const { keycloak } = useKeycloak();
    const { gid } = useParams();
    const [publishingError, setPublishingError] = useState(null);
    const [results, setResults] = useState([]);
    const game = games.find(e => e.id === gid);

    const getResults = () => {
        fetch(`${API_URL}/results/get-game-results?gameId=${game.id}&orderByDescending=${game.orderByDescending}`)
        .then((response) => response.json())
        .then((data) => setResults([...data]));
    }

    const publishResult = (currentResult, ) => {
        fetch(`${API_URL}/results/post-result`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${keycloak.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                GameId: game.id,
                ResultValue: currentResult,
                ResultDescending: game.orderByDescending
            })
        })
        .then((response) => {
            setPublishingError(null);
            getResults();
        })
        .catch((err) => {
            setPublishingError(err);
        })
    }

    useEffect(() => {
        getResults();
    }, [])

    
    if(game) {
        return (
            <>
                <Center>
                    {
                        game ?
                        <VStack>
                            <h1 style={{textAlign: "center"}}>
                                {game.name}
                            </h1>
                            <span style={{
                                fontFamily: 'Roboto Slab,serif', 
                                fontSize: '15px'
                                }}>
                                Разработчик: <a className='developer-link' href={'/about-us'}>{game.developer}</a>
                            </span>

                            {game.component(publishResult, publishingError, setPublishingError)}

                            <Rating results={results} getResults={getResults} />
                        </VStack>
                        :
                        <h1>Loading...</h1>
                    }
                    
                </Center>
            </>
        )
    } else {
        return (
            <Center>
                <h1>Что-то пошло не так... Проверьте идентификатор игры</h1>
            </Center>
        )
    }
}

export default GameDetailPage;
