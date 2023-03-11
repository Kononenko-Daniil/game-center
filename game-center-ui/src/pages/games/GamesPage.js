import Center from '../../components/flex/Center';
import HStack from '../../components/flex/HStack';
import './GamesPage.css';
import games from '../../shared/games';
import VStack from '../../components/flex/VStack';
import GameCard from '../../components/game-card/GameCard';

const GamesPage = () => {
    return (
        <>
            <Center>
                <VStack>
                    <h1 className='heading'>ИГРЫ</h1>
                    <HStack>
                        {
                            games.map((game, index) => 
                                <GameCard game={game} />
                            )
                        }
                    </HStack>
                </VStack>
            </Center>
        </>
    )
}

export default GamesPage;
