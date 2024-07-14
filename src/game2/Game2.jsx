import React from 'react'
import { Link } from 'react-router-dom'
const Game2 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-black via-gray-800 to-black text-center'>
     <Link to="/game21">
        <button className="relative text-2xl my-8 bg-cyan-400 text-black px-6 py-3 rounded-md transform transition-transform duration-300 hover:scale-110 overflow-hidden">
          <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
          <span className="relative">Play with friend</span>
        </button>
      </Link>
      <Link to="/game22">
        <button className="relative text-2xl my-8 bg-cyan-400 text-black px-6 py-3 rounded-md transform transition-transform duration-300 hover:scale-110 overflow-hidden">
          <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
          <span className="relative">Play with Saquib</span>
        </button>
      </Link>
    </div>
  )
}

export default Game2
