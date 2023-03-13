import { useKeycloak } from "@react-keycloak/web";
import Center from "../../components/flex/Center";
import HStack from "../../components/flex/HStack";
import './AccountPage.css';
import avatar from '../../shared/avatar.png';
import { useEffect, useState } from "react";
import { API_URL } from "../../env";
import games from '../../games';
import VStack from "../../components/flex/VStack";

const AccountPage = () => {
    const { keycloak, initialized } = useKeycloak();
    const [results, setResults] = useState([]);

    const getGameNameById = (gameId) => {
        const _game = games.find(g => g.id == gameId);
        const gameName = _game.name;

        return gameName;
    }
    
    const getUserResults = () => {
        fetch(`${API_URL}/results/get-user-results?userId=${keycloak.tokenParsed.sub}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${keycloak.token}`,
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((data) => setResults([...data]));
    }

    useEffect(() => {
        if(initialized){
            getUserResults();
        }
    }, [initialized])

    return (
        <Center>
            {
                initialized ?
                <VStack>
                    <div className="card">
                        <img src={avatar} className="avatar" />
                        <h1>{keycloak.tokenParsed.preferred_username}</h1>
                        <p>{keycloak.tokenParsed.name}</p>
                        <button 
                            className="danger" 
                            onClick={() => keycloak.logout()}>
                                Выйти
                        </button>
                    </div>
                    
                    <HStack style={{justifyContent: 'center'}}>
                        {
                            results.map((result, index) => 
                                <div className="card" key={index}>
                                    <h1>{result.resultValue}</h1>
                                    <p>{getGameNameById(result.gameId)}</p>
                                </div>
                            )
                        }
                    </HStack>
                </VStack>
                :
                <h1>Loading...</h1>
            }
            
            
        </Center>
    )
}

export default AccountPage;
