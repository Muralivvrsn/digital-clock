import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
        <NavLink to="/" className={({isActive}) => isActive?'bottomLine':''}  >Clock</NavLink>
        <NavLink to="/timer" className={({isActive}) => isActive?'bottomLine':''} >Timer</NavLink>
        <NavLink to="/stopwatch"className={({isActive}) => isActive?'bottomLine':''}>Stopwatch</NavLink>
    </nav>
  )
}

export default Navbar