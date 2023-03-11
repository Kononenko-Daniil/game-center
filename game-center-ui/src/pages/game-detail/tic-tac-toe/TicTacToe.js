import { useState } from "react";
import './TicTacToe.css';
import crossImg from '../../../shared/cross.png';
import circleImg from '../../../shared/circle.png';
import Center from "../../../components/flex/Center";
import VStack from "../../../components/flex/VStack";
import '../../../css/global.css';

const TicTacToe = () => {
    const USER = 1;
    const ENEMY = 2;
    const NOBODY = -1;

    const [field, setField] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    const [isUserMove, setIsUserMove] = useState(true);
    const [winner, setWinner] = useState(0);

    const setEmptyField = () => {
        const emptyField = [];
        for(let i = 0; i < 3; i++) {
            emptyField.push([0, 0, 0]);
        }

        setField([...emptyField]);
    }

    const handleRepeatClick = (e) => {
        setEmptyField();
        setIsUserMove(true);
        setWinner(0);
    }

    const showWinner = () => {
        let message = "";
        switch(winner) {
            case USER: {
                message = "Ура! Ты победил 🎉";
                break;
            }
            case ENEMY: {
                message = "К сожалению ты проиграл ☹️";
                break;
            }
            case NOBODY: {
                message = "Ничья 😐"
                break;
            }
            default: {
                return (
                    <></>
                )
            }
        }

        return (
            <Center>
                <VStack>
                    <h1 className="winner-text">{message}</h1>
                    <button className="primary" onClick={handleRepeatClick}>Играть снова</button>
                </VStack>
            </Center>
        )
    }

    const registerWin = (playerCode) => {
        setIsUserMove(false);
        setWinner(playerCode);
    }

    const checkWinStatus = (playerCode) => {
        if(playerCode === NOBODY) {
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    if (field[i][j] === 0) {
                        return false;
                    }
                }
            }

            return true;
        }

        for(let i = 0; i < 3;i++){
            if(field[i][0] == playerCode && field[i][1] == playerCode && field[i][2] == playerCode) {
                return true;
            }
            if(field[0][i] == playerCode && field[1][i] == playerCode && field[2][i] == playerCode){
                return true;
            }
        }
        if(field[0][0] == playerCode && field[1][1] == playerCode && field[2][2] == playerCode) {
            return true;
        }
        if(field[0][2] == playerCode && field[1][1] == playerCode && field[2][0] == playerCode)  {
            return true;
        }

        return false;
    }

    const checkWin = () => {
        if (checkWinStatus(USER)) {
            registerWin(USER);
        } else if (checkWinStatus(ENEMY)) {
            registerWin(ENEMY);
        } else if(checkWinStatus(NOBODY)) {
            registerWin(NOBODY);
        } else {
            return false;
        }

        return true;
    }

    const processEnemyMove = () => {
        let hasProblemPosition = false;

        for(let i = 0; i < 3; i++){
            if(field[i][0]  == USER && field[i][1]  == USER && field[i][2] == 0 && !hasProblemPosition){
                field[i][2] = ENEMY;
                hasProblemPosition = true;
                break;
            } else if(field[0][i] == USER && field[1][i] == USER && field[2][i] == 0 && !hasProblemPosition){
                field[2][i] = ENEMY;
                hasProblemPosition = true;
                break;
            } else if(field[i][0] == 0 && field[i][1] == USER && field[i][2] == USER && !hasProblemPosition) {
                field[i][0] = ENEMY;
                hasProblemPosition = true;
                break;
            } else if(field[0][i] == 0 && field[1][i] == USER && field[2][i] == USER && !hasProblemPosition){
                field[0][i] = ENEMY;
                hasProblemPosition = true;
                break;
            }
        }
    
        if(field[0][0] == USER && field[1][1] == USER && field[2][2] == 0 && !hasProblemPosition) {
            field[2][2] = ENEMY;
            hasProblemPosition = true;
        } else if(field[0][0] == 0 && field[1][1] == USER && field[2][2] == USER && !hasProblemPosition) {
            field[0][0] = ENEMY;
            hasProblemPosition = true;
        } else if(field[0][2] == USER && field[1][1] == USER && field[2][0] == 0 && !hasProblemPosition){
            field[2][0] = ENEMY;
            hasProblemPosition = true;
        } else if(field[0][2] == 0 && field[1][1] == USER && field[2][0] == USER && !hasProblemPosition){
            field[0][2] = ENEMY;
            hasProblemPosition = true;
        }

        if (!hasProblemPosition) {
            let row, col;
            do {
                row = Math.floor(Math.random() * 3);
                col = Math.floor(Math.random() * 3);
            } while (field[row][col] !== 0);

            registerMove(row, col, ENEMY);
        }

        checkWin();
    }

    const registerMove = (x, y, sign) => {
        const _field = field;
        _field[x][y] = sign;
        setField([..._field]);
    }

    const handleUserClick = (x, y) => {
        if (isUserMove && field[x][y]  == 0) {
            registerMove(x, y, USER);

            if(!checkWin()) {
                processEnemyMove();
            }
        }
    }

    const printCell = (cell) => {
        switch(cell) {
            case 0: {
                return (<></>);
            }
            case 1: {
                return (
                    <img className="cell-img" src={crossImg} alt="Cross" />
                )
            }
            case 2: {
                return (
                    <img className="cell-img" src={circleImg} alt="Circle" />
                )
            }
        }
    }

    return (
        <>
            <div className="field">
                {
                    field.map((row, rowIndex) => 
                        <div className="row" key={rowIndex}>
                            {
                                row.map((cell, cellIndex) => 
                                    <div 
                                        className="cell" 
                                        key={cellIndex} 
                                        onClick={() => handleUserClick(rowIndex, cellIndex)}>
                                        {printCell(cell)}
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
            {showWinner()}
            
        </>
    )
}

export default TicTacToe;
