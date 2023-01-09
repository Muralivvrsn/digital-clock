import React, { useEffect } from 'react'
import { useState } from 'react';
import { setTime } from './Function';
import Home from './Home';
const Stopwatch = () => {
    const [time, setTimer] = useState("00:00:00");
    const [started, setStarted] = useState(false);
    useEffect(()=>{
      if(started){
        setTimeout(()=>{
          setTimer(setTime(time));
        },1000);
      }
    },[time,started]);
  return (
    <div className='timer'>
        <div className="Timings">
          <Home clockTime = {time} displayColor = {'White'}/>
        </div>
        <div className="buttons">
            <button id='start-btn'  onClick={()=>{setTimer(setTime(time));setStarted(true)}}>Start</button>
            <button id='stop-btn'  onClick={()=>{setStarted(false)}}>Stop</button>
            <button id='reset-btn'  onClick={()=>{setStarted(false);setTimer("00:00:00")}}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch