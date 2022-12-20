import React from 'react'
import { useState } from 'react';
import Home from './Home'
const Clock = () => {
    let ctime = new Date().toLocaleTimeString("en-Us", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const [time, fn] = useState(ctime);
      const update = () => {
        ctime = new Date().toLocaleTimeString("en-Us", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        fn(ctime);
      };
      setInterval(update, 1000);
  return (
       <Home clockTime={time}/>
  )
}

export default Clock
