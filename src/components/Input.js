import React from 'react'

const Input = () => {
  return (
    <div className="classInput">
        <div className='input'>
            <input type="number" value={0} min='0' max={24}/>
            :
            <input type="number" value={0} min={0} max={59}/>
            :
            <input type="number" value={0} min={0} max={59}/>
        </div>
    </div>
  )
}

export default Input
