
import React, {useState} from 'react'
const Input = (props) => {
  const [Data , getData] = useState({hr:0,min:0,display:false});
  const update = ()=>props.func(Data);
  return (
    <div className={(INC?"getAnimate":" ")+" classInput " + (props.display?' inputNoDisplay':' inputDisplay')}>
        <div className='input'>
            <form action="" onSubmit={update}>
            <input type="number" min={0} max={24} onChange={(e)=>getData({...Data, hr:e.target.value})} autoFocus/>
            hr
            <input type="number" min={0} max={59}   onChange={(e)=>getData({...Data, min:e.target.value})}/>
            min
            <button id='input-btn'>set</button>
            </form>
        </div>
    </div>
  )
}

export default Input
