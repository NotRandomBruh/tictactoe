import { useState } from "react";
import Board from "./Board";
import "./Game.css";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [player, setPlayer] = useState(false);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setPlayer(!player);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board player={player} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}

export default Game;
