import {Field} from "../Field/Field.jsx";
import {Information} from "../Information/Information.jsx";
import styles from "./GameLayout.module.css"
import PropTypes from "prop-types";


export function GameLayout({currentPlayer, isGameEnded, isDraw, field, onRestart, onCellClick}) {
    let info = ''
    if (isDraw) {info = 'Ничья'} else if (isGameEnded) {info = `Победитель: ${currentPlayer}`} else {info = `Ходит: ${currentPlayer}`}



    return (
            <div className={styles["game-layout"]}>
                <div className={styles.inner}>
                    <Information text={info}/>
                    <Field field={field} onCellClick={onCellClick}/>
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