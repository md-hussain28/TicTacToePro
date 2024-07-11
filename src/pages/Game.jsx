import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Board from '../components/Board';
import { GameContext,GameProvider } from '../context/GameContext';

const Game = () => {
  
  return (
    <GameProvider>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <Board/>
        <Link to="/start">
       <h1 className='bg-teal-400 p-4'>Back</h1>
    </Link>
    </div>
   
    </GameProvider>
  );
};

export default Game;
