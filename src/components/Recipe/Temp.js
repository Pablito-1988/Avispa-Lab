import React, { useEffect } from "react";
import { useState } from "react";
import functions from "../../functions/Math";
const Temp = (props) => {
  const time = Number(props.time);
   
   console.log(time)
    const [counter, setCounter] = useState('');
    
   
    useEffect(() => {
        
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [time ,counter ]);
  
   
  
  return (
    <div>
      <p className="mashTotal">{time} min</p>
      <p className="mashTotal">{counter}</p>
      <button type="button"  >
        Empezar
      </button>
    </div>
  );
};

export default Temp;
