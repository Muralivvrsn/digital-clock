import React from 'react'
import { useState } from 'react';
import Home from './Home';
const Stopwatch = () => {
    const [time, setTime] = useState("00:00:00");
    console.log(time)
  return (
    <div className='timer'>
        <div className="Timings">
          <Home clockTime = {time}/>
        </div>
        <div className="buttons">
            <button id='start-btn'>Start</button>
            <button id='stop-btn'>Stop</button>
            <button id='reset-btn'>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch