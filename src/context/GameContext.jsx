import React, { createContext, useState } from 'react';

const GameContext = createContext(null);

const GameProvider = ({ children }) => {
  const [chance, setChance] = useState('O');
  const [state,setState]=useState(0);
  const [cell,setCell]=useState([
    { id :1,brow:0,bcol:0,w:''},
    { id :2,brow:0,bcol:1,w:'-1'},
    { id :3,brow:0,bcol:2,w:''},
    { id :4,brow:1,bcol:0,w:''},
    { id :5,brow:1,bcol:1,w:''},
    { id :6,brow:1,bcol:2,w:'1'},
    { id :7,brow:2,bcol:0,w:''},
    { id :8,brow:2,bcol:1,w:''},
    { id :9,brow:2,bcol:2,w:''}
   ])
   const [grid,setGrid]=useState([
    { id :1,row:0,col:0,w:''},
    { id :2,row:0,col:1,w:''},
    { id :3,row:0,col:2,w:''},
    { id :4,row:1,col:0,w:''},
    { id :5,row:1,col:1,w:''},
    { id :6,row:1,col:2,w:''},
    { id :7,row:2,col:0,w:''},
    { id :8,row:2,col:1,w:''},
    { id :9,row:2,col:2,w:''}
    ])
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
  const checkTic=(r,c)=>{
        const v=checkSmall(r,c);
        if(v==1){
            grid.map((c)=>{
                if(c.row===r&&c.col===c){
                    
                }
            })
        }
  }
  

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
    checkTic(bigRow,bigCol);
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
    state,setState,setX,setY,
    ChangeChance,chance,checkSmall,
    grid,cell
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
