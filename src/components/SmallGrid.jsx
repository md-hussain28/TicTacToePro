import React from 'react';
import Cell from './Cell';

const SmallGrid = ({col,row}) => {
 const cell=[
  { id :1,brow:0,bcol:0},
  { id :2,brow:0,bcol:1},
  { id :3,brow:0,bcol:2},
  { id :4,brow:1,bcol:0},
  { id :5,brow:1,bcol:1},
  { id :6,brow:1,bcol:2},
  { id :7,brow:2,bcol:0},
  { id :8,brow:2,bcol:1},
  { id :9,brow:2,bcol:2}
 ]

  
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
