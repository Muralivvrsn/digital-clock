import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/stopwatch">Stopwatch</Link>
    </nav>
  )
}

export default Navbar