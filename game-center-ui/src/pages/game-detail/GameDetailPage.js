import { useState } from "react";
import { useParams } from "react-router";
import Center from "../../components/flex/Center";
import VStack from "../../components/flex/VStack";
import games from "../../shared/games";

const GameDetailPage = () => {
    const { gid } = useParams();

    const game = games.find(e => e.id === gid);
    if(game) {
        return (
            <>
                <Center>
                    <VStack>
                        <h1 style={{textAlign: "center"}}>{game.name}</h1>
                        <span style={{fontFamily: 'Roboto Slab,serif', fontSize: '15px'}}>
                            Разработчик: <a className='developer-link' href={`${game.developer}`}>{game.developer}</a>
                        </span>

                        {game.component()}
                    </VStack>
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
