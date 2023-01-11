
import React, {useState} from 'react';
const Input = (props) => {
  const [Data , getData] = useState({hr:0,min:0,display:false});
  const update = (e)=>{
    props.func({...Data, display:true});
    e.preventDefault();
  };
  console.log(props)
  return (
    <div className={" classInput " + (props.display?' noDisplay':' display')}>
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
