// src/TicTac.js
import React, { useState } from 'react';

const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [moves, setMoves] = useState([]);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[index]) return;

    boardCopy[index] = isXNext ? 'X' : 'O';
    setBoard(boardCopy);
    setIsXNext(!isXNext);
    setMoves([...moves, index]);

    if (calculateWinner(boardCopy)) {
      return;
    }

    if (boardCopy.every((square) => square !== null) || !canWin(boardCopy, isXNext ? 'O' : 'X')) {
      boardCopy[moves[0]] = null;
      setMoves(moves.slice(1));
      setBoard(boardCopy);
    }
  };

  const renderSquare = (index) => {
    return (
      <button
        className="w-16 h-16 bg-white border-2 border-gray-400 text-xl font-bold flex justify-center items-center"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-2xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="w-16 h-16">
              {renderSquare(index)}
            </div>
          ))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const canWin = (board, player) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      (board[a] === player || board[a] === null) &&
      (board[b] === player || board[b] === null) &&
      (board[c] === player || board[c] === null)
    ) {
      return true;
    }
  }

  return false;
};

export default TicTac;
