// import { isImportDefaultSpecifier } from '@babel/types'
import React, {  useEffect, useState } from 'react'
import { reducer, reduceTime, getTime } from './Function'
import Home from './Home'
import Input from './Input'
const Timer = () => {
  const [time, ff] = useState('00:00:00');
  const [isDisplay, showDisplay] = useState(false);
  useEffect(()=>{
    if(isDisplay)
    setTimeout(()=>{ff(reduceTime(time))},1000);
  },[time]);
  console.log(time)
  function putData(data){
    ff(getTime(data[0],data[1],data[2]));
    showDisplay(data[3]);
  }
  return (
    <div className='timer'>
      <Input func={putData} display={isDisplay}/>
      <div className={isDisplay?'display':'noDisplay'}>
      <Home clockTime = {time} displayColor = {'White'}/>
      </div>
    </div>
  )
}

export default Timer