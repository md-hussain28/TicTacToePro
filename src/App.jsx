import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from  './pages/Home';
import Game from  './pages/Game';
import Score from './pages/Score';
import About from './pages/About';
import Start from './pages/Start';
import AI from    './pages/AI';
import TicTac from './game2/TicTac';
import Game2 from './game2/Game2';
import TicTacAi from './game2/TicTacAi';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/start" element={<Start/>}/>
        <Route path="/scorecard" element={<Score />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai" element={<AI/>}/>
        <Route path="/game2" element={<Game2/>}/>
        <Route path="/game21" element={<TicTac/>}/>
        <Route path="/game22" element={<TicTacAi/>}/>
      </Routes>
   
  );
};

export default App;
