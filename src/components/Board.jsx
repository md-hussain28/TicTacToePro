import React,{useContext} from 'react';
import SmallGrid from './SmallGrid';
import { GameContext } from '../context/GameContext';


const Board = () => {
 
  const {state,setState,grid} =useContext(GameContext);
  const fun=()=>{
     setState(state+1);
  }
  return (
    <div className="grid grid-cols-3 gap-1 ">
       {
         grid.map(c=>(
           <SmallGrid   key={c.id} row={c.row} col={c.col} />
         ))
       }
       <div>
           <h1 onClick={fun}>Click</h1>
           <h1>The valus is {state}</h1>
       </div>
    </div>
  );
};

export default Board;
