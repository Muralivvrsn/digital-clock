import {fourBits} from './Function';
// import {useState} from 'react';
import React from 'react';
const Card = (element) => {
    const states = fourBits(element.number);
    return (
        <div className="box">
            <div id="top" className={(states[0]? element.color:'Black') +  ' stick'}></div>
            <div id="topleft" className={(states[5]? element.color:'Black') +  ' stick'}></div>
            <div id="topright" className={(states[1]? element.color:'Black') +  ' stick'}></div>
            <div id="mid" className={(states[6]? element.color:'Black') +  ' stick'}></div>
            <div id="bottom" className={(states[3]? element.color:'Black') +  ' stick'}></div>
            <div id="bottomleft" className={(states[4]? element.color:'Black') +  ' stick'}></div>
            <div id="bottomright" className={(states[2]? element.color:'Black') +  ' stick'}></div>
        </div>
     );
}
 
export default Card;