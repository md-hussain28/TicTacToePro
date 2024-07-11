import React, { createContext, useState } from 'react';

const GameContext = createContext(null);

const GameProvider = ({ children }) => {
  const [chance, setChance] = useState('O');
  const [state,setState]=useState(0);
  const tic = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  
  const [grids, setGrids] = useState([
    [tic, tic, tic],
    [tic, tic, tic],
    [tic, tic, tic],
  ]);
  
  const ChangeChance=()=>{
     if(chance==='O'){setChance('X');}
     else{setChance('O');}
  }
  const checkSmall = (r, c) => {
    const smallGrid = grids[r][c];
  
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (smallGrid[i][0] !== 0 &&
          smallGrid[i][0] === smallGrid[i][1] &&
          smallGrid[i][1] === smallGrid[i][2]) {
        return smallGrid[i][0];
      }
    }
  
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (smallGrid[0][j] !== 0 &&
          smallGrid[0][j] === smallGrid[1][j] &&
          smallGrid[1][j] === smallGrid[2][j]) {
        return smallGrid[0][j];
      }
    }
  
    // Check diagonals
    if (smallGrid[0][0] !== 0 &&
        smallGrid[0][0] === smallGrid[1][1] &&
        smallGrid[1][1] === smallGrid[2][2]) {
      return smallGrid[0][0];
    }
    if (smallGrid[0][2] !== 0 &&
        smallGrid[0][2] === smallGrid[1][1] &&
        smallGrid[1][1] === smallGrid[2][0]) {
      return smallGrid[0][2];
    }
  
    return 0;
  };
  

  const setX = (bigRow, bigCol, smallRow, smallCol) => {
    setGrids(prevGrids => {
      const newGrids = prevGrids.map(bigRowArr =>
        bigRowArr.map(bigColArr =>
          bigColArr.map(smallRowArr =>
            smallRowArr.slice()
          )
        )
      );
      newGrids[bigRow][bigCol][smallRow][smallCol] = 1;
      //console.log(grids);
      return newGrids;
    });
  };
  
  const setY = (bigRow, bigCol, smallRow, smallCol) => {
    setGrids(prevGrids => {
      const newGrids = prevGrids.map(bigRowArr =>
        bigRowArr.map(bigColArr =>
          bigColArr.map(smallRowArr =>
            smallRowArr.slice()
          )
        )
      );
      newGrids[bigRow][bigCol][smallRow][smallCol] = -1;
      
      return newGrids;
    });
  };
  

  const value={
    state,setState,setX,setY,ChangeChance,chance,checkSmall
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
