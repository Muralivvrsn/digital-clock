import React, {  useEffect, useReducer, useState } from 'react'
import {reducer} from './Function'
import Home from './Home'
const Timer = () => {

  const [state, dispatch] = useReducer(reducer, {hour:0,minute:0,second:0});
  const [time, ff] = useState('00:00:00');
  const update=()=>{
    ff(`${(state.hour<10?'0' + state.hour: state.hour)}:${(state.minute<10?'0' + state.minute: state.minute)}:${(state.second<10?'0' + state.second: state.second)}`);
    
  }
  setInterval(()=>{reduceTime(time)},1000);
  useEffect(() => {
    window.localStorage.setItem('state', state);
  }, [state]);
  return (
    <div className='timer'>
      <div className="Timings">
      <Home clockTime = {time}/>
      </div>
      <div className="inputTimer">
        <label htmlFor="hour">
          
        <input type="range" id='hour' min={0} max={23} value={state.hour} onChange={(e)=>{dispatch({type : "hour", event: e})}} />
        <span>{state.hour} <span className='sp'> hours</span></span>
        </label>
        <label htmlFor="minute">
        <input type="range" id='minute' min={0} max={59} value={state.minute} onChange={(e)=>{dispatch({type : "minute", event: e})}}/>
        <span>{state.minute} <span className='sp'>minutes</span></span>
        </label>
        <label htmlFor="second">
        <input type="range" id='second' min={0} max={59} value={state.second} onChange={(e)=>{dispatch({type : "second", event: e})}}/>
        <span>{state.second} <span className='sp'>seconds</span></span>
        </label>
        <button onClick={update}>Set</button>
        </div>
    </div>
  )
}

export default Timer