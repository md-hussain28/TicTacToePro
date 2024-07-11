import React,{useContext} from 'react';
import SmallGrid from './SmallGrid';
import { GameContext } from '../context/GameContext';


const Board = () => {
  const grid=[
  { id :1,row:0,col:0},
  { id :2,row:0,col:1},
  { id :3,row:0,col:2},
  { id :4,row:1,col:0},
  { id :5,row:1,col:1},
  { id :6,row:1,col:2},
  { id :7,row:2,col:0},
  { id :8,row:2,col:1},
  { id :9,row:2,col:2}
  ]
  const {state,setState} =useContext(GameContext);
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
