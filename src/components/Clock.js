import React from 'react'
import { useState } from 'react';
import {getCurrentTime} from './Function';
import Home from './Home'
const Clock = () => {
      const [time, fn] = useState(getCurrentTime);
      setInterval(()=>{fn(getCurrentTime())}, 1000);
  return (
       <Home clockTime={time} displayColor = {'White'}/>
  )
}

export default Clock
