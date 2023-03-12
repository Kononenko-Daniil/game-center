import TicTacToe from './pages/game-detail/tic-tac-toe/TicTacToe';
import tic_tac_toe from './shared/tic_tac_toe.png';

const games = [
    {
        id: "0",
        name: "Крестики - Нолики",
        description: "Крестики - Нолики",
        image: tic_tac_toe,
        developer: "Daniil Kananenka",
        component: TicTacToe,
        orderByDescending: false
    }
]

export default games;
