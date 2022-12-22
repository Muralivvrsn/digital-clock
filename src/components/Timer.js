import React, {  useEffect, useReducer, useState } from 'react'
import { reducer, reduceTime } from './Function'
import Home from './Home'
const Timer = () => {
  const [time, ff] = useState('00:00:00');
  const [count, changeCount]= useState(0);
  const [color, changeColor] = useState('White')
  const [state, dispatch] = useReducer(reducer, {hour:"00",minute:"00",second:"00",isTrue:false});
  const update=()=>{
    if(count===0)
    ff(state.hour+':'+state.minute+':'+state.second);
    else
    ff(reduceTime(time));
    changeEffect();
    changeCount(count+1);
  }
  const changeEffect = ()=>{
    if(parseInt(time[0]+time[1]) === 0 && parseInt(time[3]+time[4]) <=30 && parseInt(time[6]+time[7]))
    changeColor('Red');
  }
  useEffect(()=>{
    changeEffect();
    if(state.isTrue)
    setTimeout(()=>{ff(reduceTime(time))},1000);
  },[time]);
  console.log(time)
  return (
    <div className='timer'>
      <div className="Timings">
      <Home clockTime = {time} displayColor = {color}/>
      </div>
      <div className="inputTimer">
        <label htmlFor="hour">
          
        <input type="range" id='hour' min={0} max={23} value={state.hour} onChange={(e)=>{dispatch({type:'hour',event:e})}} />
        <span>{parseInt(state.hour)} <span className='sp'> hours</span></span>
        </label>
        <label htmlFor="minute">
        <input type="range" id='minute' min={0} max={59} value={state.minute} onChange={(e)=>{dispatch({type:'minute',event:e})}}/>
        <span>{parseInt(state.minute)} <span className='sp'>minutes</span></span>
        </label>
        <label htmlFor="second">
        <input type="range" id='second' min={0} max={59} value={state.second} onChange={(e)=>{dispatch({type:'second',event:e})}}/>
        <span>{parseInt(state.second)} <span className='sp'>seconds</span></span>
        </label>
        </div>
        <div className="buttons">
            <button id='start-btn' onClick={()=>{update();dispatch({type:'isTrue',event:true})}}>Start</button>
            <button id='stop-btn' onClick={()=>{dispatch({type:'isTrue',event:false})}}>Stop</button>
        </div>
    </div>
  )
}

export default Timer