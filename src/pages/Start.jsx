import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  const [gameMode, setGameMode] = useState('twoPlayer');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [link,setLink] =useState("game");
  
  const handleGameModeChange = (event) => {
    const k=event.target.value;
    setGameMode(k);
    if(k==="twoPlayer")
    { setLink("game");}
    else{ setLink("ai"); console.log(link); }

  };

  return (
    <div className="h-screen w-full flex flex-col justify-between bg-gradient-to-r from-black via-gray-900 to-black p-4">
      <Link to="/" className="absolute top-4 left-4">
        <button className="bg-cyan-400 text-black p-3 rounded-md transition-transform duration-300 hover:scale-105">
          Home
        </button>
      </Link>

      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Setup Game</h1>
        <div className="flex flex-col items-center space-y-4">
          <label className="text-xl text-white">Choose Game Mode</label>
          <div className="relative">
            <select
              value={gameMode}
              onChange={handleGameModeChange}
              className="p-2 rounded-md bg-white text-black appearance-none"
            >
              <option value="twoPlayer">Two Player</option>
              <option value="ai">AI</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 4a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {gameMode === 'twoPlayer' ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-start">
              <label className="text-xl text-white">Player 1 Name:</label>
              <input
                type="text"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                className="p-2 rounded-md bg-white text-black mt-1"
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-xl text-white">Player 2 Name:</label>
              <input
                type="text"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                className="p-2 rounded-md bg-white text-black mt-1"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <label className="text-xl text-white">Choose Difficulty</label>
            <div className="relative">
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="p-2 rounded-md bg-white text-black appearance-none"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 4a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <Link to={`${"/"}${link}`} className="flex justify-center">
        <button className="bg-cyan-400 text-black p-3 rounded-md transition-transform duration-300 hover:scale-105 absolute bottom-4">
          Start Game
        </button>
      </Link>
    </div>
  );
};

export default Start;
