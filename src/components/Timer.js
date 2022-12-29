import React, {  useEffect, useReducer, useState } from 'react'
import { reducer, reduceTime } from './Function'
import Home from './Home'
import Input from './Input'
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
      <Input />

    </div>
  )
}

export default Timer