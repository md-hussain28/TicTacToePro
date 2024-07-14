// src/TicTacAi.js
import React, { useState, useEffect } from 'react';

const TicTacAi = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    if (!isXNext && !calculateWinner(board)) {
      setIsAiThinking(true);
      setTimeout(() => {
        makeComputerMove();
        setIsAiThinking(false);
      }, 1000); // 1 second delay
    }
  }, [isXNext]);

  const handleClick = (index) => {
    if (!isXNext || board[index] || isAiThinking) return;
    makeMove(index, 'X');
  };

  const makeMove = (index, player) => {
    const boardCopy = [...board];
    boardCopy[index] = player;
    setBoard(boardCopy);
    setIsXNext(player === 'O');
    setMoves([...moves, index]);

    if (calculateWinner(boardCopy)) {
      return;
    }

    if (boardCopy.every((square) => square !== null) || !canWin(boardCopy, player === 'X' ? 'O' : 'X')) {
      boardCopy[moves[0]] = null;
      setMoves(moves.slice(1));
      setBoard(boardCopy);
    }
  };

  const makeComputerMove = () => {
    const bestMove = findBestMove(board);
    makeMove(bestMove, 'O');
  };

  const renderSquare = (index) => {
    return (
      <button
        className={`w-16 h-16 bg-white border-2 border-gray-400 text-xl font-bold flex justify-center items-center transition-transform duration-300 ${isAiThinking ? 'scale-95' : 'scale-100'}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setMoves([]);
    setIsAiThinking(false);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col justify-between items-center  h-screen w-full bg-gradient-to-r from-black via-gray-800 to-black text-center">
      <div className="text-2xl my-8 bg-cyan-500 px-4 py-2 rounded-full">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="w-16 h-16">
              {renderSquare(index)}
            </div>
          ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-10"
        onClick={restartGame}
      >
        Restart
      </button>
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

const isMovesLeft = (board) => {
  return board.includes(null);
};

const evaluate = (board) => {
  const winner = calculateWinner(board);
  if (winner === 'O') return 10;
  if (winner === 'X') return -10;
  return 0;
};

const minimax = (board, depth, isMax) => {
  const score = evaluate(board);

  if (score === 10) return score - depth;
  if (score === -10) return score + depth;
  if (!isMovesLeft(board)) return 0;

  if (isMax) {
    let best = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        best = Math.max(best, minimax(board, depth + 1, !isMax));
        board[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'X';
        best = Math.min(best, minimax(board, depth + 1, !isMax));
        board[i] = null;
      }
    }
    return best;
  }
};

const findBestMove = (board) => {
  let bestVal = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = 'O';
      const moveVal = minimax(board, 0, false);
      board[i] = null;
      if (moveVal > bestVal) {
        bestMove = i;
        bestVal = moveVal;
      }
    }
  }
  return bestMove;
};

export default TicTacAi;
