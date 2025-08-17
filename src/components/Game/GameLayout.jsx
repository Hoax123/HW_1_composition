import {Field} from "../Field/Field.jsx";
import {Information} from "../Information/Information.jsx";
import styles from "./GameLayout.module.css"
import PropTypes from "prop-types";
import {useSelector} from "react-redux";


export function GameLayout({onRestart, onCellClick}) {
    const {isGameEnded, isDraw, currentPlayer} = useSelector(state => state)

    let info = ''
    if (isDraw) {info = 'Ничья'}
    else if (isGameEnded) {info = `Победитель: ${currentPlayer}`}
    else {info = `Ходит: ${currentPlayer}`}



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

