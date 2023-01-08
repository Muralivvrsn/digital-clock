
import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
const Input = (props) => {
  const hr = useSelector((state)=>state.hours);
  const min = useSelector((state)=>state.minutes);
  const sec = useSelector((state)=>state.seconds);
  const INC = useSelector((state)=>state.INC);
  console.log(hr,min,sec,INC)
  const dispatch = useDispatch();
  const update = ()=>props.func([hr,min,sec,true]);
  return (
    <div className={(INC?"getAnimate":" ")+" classInput " + (props.display?' inputNoDisplay':' inputDisplay')}>
        <div className='input'>
            <form action="">
            <input type="number" min={0} max={24} onChange={(e)=>dispatch({type:'hours',playload:e.value})} autoFocus/>
            hr
            <input type="number" min={0} max={59}   onChange={(e)=>dispatch({type:'minutes',playload:e.value})}/>
            min
            <input type="number" min={0} max={59}  onChange={(e)=>dispatch({type:'seconds',playload:e.value})}/>
            sec
            </form>
        </div>
        <button id='input-btn' onClick={update}>set</button>
    </div>
  )
}

export default Input
