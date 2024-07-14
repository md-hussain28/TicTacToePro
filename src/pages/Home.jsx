import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-black via-gray-800 to-black text-center">
      <h1 className="text-5xl font-bold text-cyan-400 mb-4 animate-pulse">Welcome to the</h1>
      <h1 className="text-6xl font-bold text-cyan-400 mb-8 animate-pulse">Ultimate Tic Tac Toe</h1>
      <Link to="/start">
        <button className="relative text-2xl bg-cyan-400 text-black px-6 py-3 rounded-md transform transition-transform duration-300 hover:scale-110 overflow-hidden">
          <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
          <span className="relative">TicTacToe Pro Max</span>
        </button>
      </Link>
      <Link to="/game2">
        <button className="relative text-2xl my-8 bg-cyan-400 text-black px-6 py-3 rounded-md transform transition-transform duration-300 hover:scale-110 overflow-hidden">
          <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
          <span className="relative">TicTacToe Pro</span>
        </button>
      </Link>
      <div className="mt-10 flex space-x-4">
        <div className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce200"></div>
        <div className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce400"></div>
      </div>
    </div>
  );
};

export default Home;
