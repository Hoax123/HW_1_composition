import {useEffect, useState} from 'react'
import styles from './Game.module.css'
import {GameLayout} from "./GameLayout.jsx";
import {store} from "../../stateManagment/store/store.jsx";


function Game() {
  const [gameState, setGameState] = useState(store.getState())

  useEffect(() => {
    const unsubscribe = store.subscribe(
        () => {setGameState(store.getState())}
    )
    return unsubscribe
  }, [])

  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];


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
      store.dispatch({type: "SET_FIELD", payload: newField})
      store.dispatch({type:"SET_GAME_ENDED", payload: true})
      return
    }

    let allCellsFilled = newField.every(cell => cell !== '')
    if (allCellsFilled) {
      store.dispatch({type:"SET_FIELD", payload: newField})
      store.dispatch({type:"SET_IS_DRAW", payload: true})
      store.dispatch({type:"SET_GAME_ENDED", payload: true})
      return
    }


    store.dispatch({type:"SET_FIELD", payload: newField})
    store.dispatch({type:"SET_CURRENT_PLAYER", payload: gameState.currentPlayer === 'X' ? '0' : 'X'})
  }

  function handleRestart() {
    store.dispatch({type:"RESTART_GAME"})
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
