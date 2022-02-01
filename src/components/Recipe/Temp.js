import React, { useEffect } from "react";
import { useState , useRef} from "react";


const Temp = (props) => {
  const time = Number(props.time);
   
   console.log(time)
    const [counter, setCounter] = useState('');
    const [start , setStart] = useState(false);
    const desapear = useRef(null);
    const music = useRef(null);

    function startButton (){
        setStart(true);
        setCounter(time)
        desapear.current.style.display = "none";    
    }
   
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000); //1minuto son 60000 milisegundos
    }, [ start , time ,counter ]);
  
   if(counter === 0){
         music.current.play()   
       setTimeout(() => 
        music.current.pause()
       ,60000) 
   }
  
  return (
    <div>
      <p className="mashTotal">{time} min</p>
      {start ? <p className="mashTotal">{counter} min</p> : ''} 
      <button type="button" className="startButton" ref={desapear} onClick={()=>{startButton()}} >
      <i className="fas fa-play-circle"></i>
      </button>
      <audio ref={music} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" autoPlay></audio>
    </div>
  );
};

export default Temp;
