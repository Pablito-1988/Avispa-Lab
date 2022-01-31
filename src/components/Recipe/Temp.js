import React, { useEffect } from "react";
import { useState } from "react";


const Temp = (props) => {
  const time = Number(props.time);
   
   console.log(time)
    const [counter, setCounter] = useState(0);
    const [start , setStart] = useState(false);

    function startButton (){
        setStart(true);
        setCounter(time)    
    }
   
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [ start , time ,counter ]);
  
   
  
  return (
    <div>
      <p className="mashTotal">{time} min</p>
      {start ? <p className="mashTotal">{counter} min</p> : ''} 
      <button type="button" onClick={()=>{startButton()}} >
        Empezar
      </button>
    </div>
  );
};

export default Temp;
