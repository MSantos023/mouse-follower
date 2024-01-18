import "./index.css";
import "./App.css"
import { useState } from "react";
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx";
import { turns } from "./constants.js";
import { checkWinnerFrom,checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { saveGameToStorage,resetGameStorage } from "./logic/storage/index.js";

function App() {
  //estados
  const [board, setBoard] = useState(() => {
    //se hace dentro del state porque la inicalizacion solo ocurre una vez y leer del localstorage es lento
    //recoge el board del localstorage si hay y si hay lo carga si nocarga uno vacio
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)    
  });
  const [turn, setTurn] = useState(() => {
    //recoge el turno del localstorage si hay si no hay o es null empieza el primer jugador
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
    // ?? comprueba si es null o undefined no es igual que ||
  } 
  );
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return; //no deja sobreescribir las casillas
    const newBoard = [...board];
    
    //actualiza el tablero
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambia el turno entre los jugadores
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);

    //guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) { 
      confetti()
      setWinner(newWinner) //ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }
  };

  const resetGame = () => {
    //en react simplemente con setear todo a como estaba al inicio se puede hacer un reset
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    resetGameStorage()
  }

  return (
    <main className="board">
      <h1>Tres en rayas</h1> 
      <button onClick={resetGame}>Reiniciar juego</button>
      {/*section de tablero */}
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      {/*section de los turnos */}
      <section className="turn">
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
      
    </main>
  );
}

export default App;
