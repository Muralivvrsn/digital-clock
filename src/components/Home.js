
import Card from './Card';
import React from 'react';
const Home = (Time) => {
  const time = Time.clockTime;
  const displayColor = Time.displayColor;
    return ( 
        <div className="clock-box">
            <Card number={parseInt(time[0], 10)} color={displayColor} />
            <Card number={parseInt(time[1],10)} color={displayColor} />
            <div className='colon'><p>:</p></div>
            <Card number={parseInt(time[3],10)} color={displayColor} />
            <Card number={parseInt(time[4],10)} color={displayColor} />
            <div className='colon'><p>:</p></div>
            <Card number={parseInt(time[6],10)} color={displayColor} />
            <Card number={parseInt(time[7],10)} color={displayColor} />
        </div>
     );
}
 
export default Home;