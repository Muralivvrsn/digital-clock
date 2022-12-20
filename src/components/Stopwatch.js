import React from 'react'
import { useState } from 'react';
const Stopwatch = () => {
    const [time, setTime] = useState("10:10:10");
    const startTimer = (time)=>{
        let seconds = parseInt(time.slice(6,8));
        let minutes = parseInt(time.slice(3,5));
        let hours = parseInt(time.slice(0,2));
        console.log(hours,minutes,seconds);
        
    }
    const stopTimer = (time)=>{
        
    }
    console.log(time)
  return (
    <div>
        <div className="time">

        </div>
        <div className="buttons">
            <button onClick={()=>{startTimer(time)}}>Start</button>
            <button onClick={()=>{stopTimer(time)}}>Stop</button>
            <button onClick={()=>{setTime("00:00:00")}}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch