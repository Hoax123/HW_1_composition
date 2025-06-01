import { useState } from 'react'
import styles from './Game.module.css'
import {GameLayout} from "./GameLayout.jsx";


function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ]);

  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function handleCellClick(index) {
    if (field[index] !== '' || isGameEnded) return
    let newField = [...field]
    newField[index] = currentPlayer

    let hasWon = WIN_PATTERNS.some(([a,b,c]) => {
      return (
          newField[a] === currentPlayer && newField[b] === currentPlayer && newField[c] === currentPlayer
      )
    })

    if (hasWon) {
      setField(newField)
      setIsGameEnded(true)
      return
    }

    let allCellsFilled = newField.every(cell => cell !== '')
    if (allCellsFilled) {
      setField(newField)
      setIsDraw(true)
      setIsGameEnded(true)
      return
    }

    setField(newField)
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
  }

  function handleRestart() {
    setField([
      '', '', '',
      '', '', '',
      '', '', '',
    ])
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
  }


  return (
    <div className={styles.wrapper}>
        <GameLayout currentPlayer={currentPlayer}
                    isGameEnded={isGameEnded}
                    isDraw={isDraw}
                    field={field}
                    onRestart={handleRestart}
                    onCellClick={handleCellClick}
        />
    </div>
  )
}

export default Game
