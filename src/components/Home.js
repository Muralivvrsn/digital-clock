
import Card from './Card';
import React from 'react';
const Home = (Time) => {
  const time = Time.clockTime;
    return ( 
        <div className="clock-box">
            <Card number={parseInt(time[0], 10)} />
            <Card number={parseInt(time[1],10)} />
            <span>:</span>
            <Card number={parseInt(time[3],10)} />
            <Card number={parseInt(time[4],10)} />
            <span>:</span>
            <Card number={parseInt(time[6],10)} />
            <Card number={parseInt(time[7],10)} />
        </div>
     );
}
 
export default Home;