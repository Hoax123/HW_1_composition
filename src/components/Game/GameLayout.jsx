import {Field} from "../Field/Field.jsx";
import {Information} from "../Information/Information.jsx";
import styles from "./GameLayout.module.css"
import PropTypes from "prop-types";
import {store} from "../../stateManagment/store/store.jsx";
import {useEffect, useState} from "react";


export function GameLayout({onRestart, onCellClick}) {
    const [gameState, setGameState] = useState(store.getState())

    useEffect(() => {
        const unsubscribe = store.subscribe(
            () => {setGameState(store.getState())}
        )
        return unsubscribe
    }, [])

    let info = ''
    if (gameState.isDraw) {info = 'Ничья'}
    else if (gameState.isGameEnded) {info = `Победитель: ${gameState.currentPlayer}`}
    else {info = `Ходит: ${gameState.currentPlayer}`}



    return (
            <div className={styles["game-layout"]}>
                <div className={styles.inner}>
                    <Information text={info}/>
                    <Field onCellClick={onCellClick}/>
                    <button className={styles.restartButton} onClick={onRestart}>Начать заново</button>
                </div>
            </div>
    )
}

GameLayout.propTypes = {
    currentPlayer: PropTypes.string,
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    field: PropTypes.array,
    onRestart: PropTypes.func,
    onCellClick: PropTypes.func,
}

