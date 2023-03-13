import './GameCard.css';

const GameCard = (props) => {
    const {
        game
    } = props;

    return (
        <div className="game-card">
            <img src={game.image} className={'card-image'} />
            <h1 style={{fontSize: "25px"}}>
                <a 
                    className='game-link' 
                    href={`/games/${game.id}`}>
                    {game.name}
                </a>
            </h1>
            <a 
                className='developer-link' 
                href={`${game.developer}`}>
                {game.developer}
            </a>
        </div>
    )
}

export default GameCard;
