import React, { useContext } from 'react';
import Cell from './Cell';
import { GameContext, GameProvider } from '../context/GameContext';

const SmallGrid = ({col,row}) => {
  const {cell} =useContext(GameContext);

  
  return (
    <div  onClick={()=>console.log("Big Grid",row,col)} className="bg-cyan-800 grid grid-cols-3 gap-1 p-2">
         { cell.map((child)=>(
             
             <Cell key={child.id} row={child.brow} col={child.bcol} brow={row} bcol={col}/>
           
            ))

         }
    </div>
  );
};

export default SmallGrid;
