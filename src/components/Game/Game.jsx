import styles from './Game.module.css'
import {GameLayout} from "./GameLayout.jsx";
import {useDispatch, useSelector} from "react-redux";


function Game() {
  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  let gameState = useSelector(state => state)
  let dispatch = useDispatch();


  function handleCellClick(index) {
    if (gameState.field[index] !== '' || gameState.isGameEnded) return
    let newField = [...gameState.field]
    newField[index] = gameState.currentPlayer

    let hasWon = WIN_PATTERNS.some(([a,b,c]) => {
      return (
          newField[a] === gameState.currentPlayer && newField[b] === gameState.currentPlayer && newField[c] === gameState.currentPlayer
      )
    })

    if (hasWon) {
      dispatch({type: "SET_FIELD", payload: newField})
      dispatch({type:"SET_GAME_ENDED", payload: true})
      return
    }

    let allCellsFilled = newField.every(cell => cell !== '')
    if (allCellsFilled) {
      dispatch({type:"SET_FIELD", payload: newField})
      dispatch({type:"SET_GAME_ENDED", payload: true})
      dispatch(({type: "IS_DRAW", payload: true}))
      return
    }


    dispatch({type:"SET_FIELD", payload: newField})
    dispatch({type:"SET_CURRENT_PLAYER", payload: gameState.currentPlayer === 'X' ? '0' : 'X'})
  }

  function handleRestart() {
    dispatch({type:"RESTART_GAME"})
  }


  return (
    <div className={styles.wrapper}>
        <GameLayout onRestart={handleRestart}
                    onCellClick={handleCellClick}
        />
    </div>
  )
}

export default Game
