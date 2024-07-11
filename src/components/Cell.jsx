import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../context/GameContext';

const Cell = ({ row,col, brow,bcol }) => {
  const [width, setWidth] = useState(window.innerWidth / 10);
  const [val,setVal]=useState('')
  const {setX,setY,chance,ChangeChance,checkSmall} =useContext(GameContext);
  useEffect(() => {
    const calculateWidth = () => {
      let newWidth = (window.innerWidth - 10) / 11;
      if(newWidth>50){newWidth=50;}
      setWidth(newWidth);
    };

    calculateWidth();

    const handleResize = () => {
      calculateWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  const tick=()=>{
    if(val===''){
        if(chance==='O'){setX(brow,bcol,row,col)}
        else{setY(brow,bcol,row,col)}
        setVal(chance);
        ChangeChance();
        if(checkSmall(brow,bcol)===-1)
        {console.log("winner :X")}
        else if(checkSmall(brow,bcol)===0)
          {console.log("winner :none")}
        else{console.log("winner :Y")}
        //console.log("Chance called",chance);
    }
  }
 

  return (
    <div onClick={tick} style={{ width:`${width}px`,height:`${width}px`}}
      className={`z-50 ${(val==='')?'hover:scale-110':'hover:scale-100'  }  flex items-center justify-center  bg-green-700`}>
        <h1  className='text-black text-4xl'>{val}</h1>
    </div>
  );
};

export default Cell;
