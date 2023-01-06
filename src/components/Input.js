
import React, { useEffect, useState, useRef } from 'react'

const Input = (props) => {
  const [takeInput, changeScreen] = useState(false);
  const [hr, setHour] = useState(0);
  const [min, setMinute] = useState(0);
  const [sec, setSecond] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      changeScreen(true)
    }, 1000);
  },[]);//--------------------------------------------------------
  const useref1 = useRef(null);
  const useref2 = useRef(null);
  //--------------------------------------------------------
  const update = ()=>props.func([hr,min,sec,true]);
  return (
    <div className={(takeInput?"getAnimate":" ")+" classInput " + (props.display?' inputNoDisplay':' inputDisplay')}>
        <div className='input'>
            <input type="number" min={0} max={24} onChange={(e)=>setHour(e.target.value)} autoFocus onKeyDown={(e)=>changeFocus(e)}/>
            hr
            <input type="number" min={0} max={59}   onChange={(e)=>setMinute(e.target.value)} ref={useref1} onKeyDown={(e)=>changeFocus1(e)}/>
            min
            <input type="number" min={0} max={59}  onChange={(e)=>setSecond(e.target.value)} ref={useref2}/>
            sec
        </div>
        <button id='input-btn' onClick={update}>set</button>
    </div>
  )
  function changeFocus1(e){
    if(e.keyCode === 13)
    useref2.current.focus();
  }
  function changeFocus(e){
    if(e.keyCode===13)
    useref1.current.focus();
  }
}

export default Input
