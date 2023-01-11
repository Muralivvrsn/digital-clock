// import { isImportDefaultSpecifier } from '@babel/types'
import React, { useEffect, useState } from "react";
import { reduceTime, getTime } from "./Function";
import Home from "./Home";
import Input from "./Input";
const Timer = () => {
  const [time, changeTime] = useState();
  const [isDisplay, showDisplay] = useState(false);

  // data from child
  const putData = (data) => {
    changeTime(getTime(data.hr, data.min, 0));
    showDisplay(data.display);
  };

  // useEffect hooks
  useEffect(() => {
    if (isDisplay) {
      setTimeout(() => {
        changeTime(reduceTime(time));
      }, 1000);
    }
  }, [time, isDisplay]);
  return (
    <div className="TimerDivision">
      <Input func={putData} display={isDisplay} />
      <div className={isDisplay ? "display" : "noDisplay"}>
        <Home
          clockTime={isDisplay ? time : "00:00:00"}
          displayColor={"White"}
        />
      </div>
    </div>
  );
};

export default Timer;
