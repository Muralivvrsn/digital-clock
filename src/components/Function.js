/* eslint-disable */
export function fourBits(number) {
    const d = (number&1);
    const c = (number>>1)&1;
    const b = (number>>2)&1;
    const a = (number>>3)&1;
    let states = [0,0,0,0,0,0,0];
    states[0]=((b&d) | (!b)&(!d) | (a) | (c));
    states[1]=((!b) | (!c & !d) | (c&d));
    states[2]=((b) | (!c) | (d));
    states[3]=((b&(!c)&d) | (!b & !d) | (!b & c) | (c & !d) || a);
    states[4]=((!b & !d) | (c & !d));
    states[5]=((a) | (b & !c) | (b & !d) | (!c & !d));
    states[6]=((a) | (b & !c) | (!b & c) | (c & !d));
    return states;
    
}
/* Four bits functions returns which bar is to activate and which is not*/


export function reducer(state,action){
    switch(action.type){
        case "hour": return {...state, hour:`${(action.event.target.value<10?'0' + action.event.target.value:action.event.target.value)}`};
        case "minute": return {...state, minute:`${(action.event.target.value<10?'0' + action.event.target.value:action.event.target.value)}`};
        case "second" : return {...state, second: `${(action.event.target.value<10?'0' + action.event.target.value:action.event.target.value)}`};
        case "isTrue" : return {...state, isTrue:action.event};
        default:
          return state;
      }
}
export function reduceTime(time){
    let second = parseInt(time[6]+time[7]);
    let minute = parseInt(time[3]+time[4]);
    let hour = parseInt(time[0]+time[1]);
    if(second==0){
        if(minute==0){
            if(hour==0){
                time = "00:00:00";
            }
            else{
                if(hour<=10){
                    time = `0${hour-1}:${59}:${59}`;
                }
                else{
                    time = `${hour-1}:${59}:${59}`;
                }
            }
        }
        else{
            if(hour==0){
                if(minute<=10)
                    time = `00:0${minute-1}:59`;
                else
                    time = `00:${minute-1}:59`;
            }
            else{
                if(hour<10){
                    if(minute<=10)
                        time = `0${hour}:0${minute-1}:59`;
                    else
                        time = `0${hour}:${minute-1}:59`;
                }
                else{
                    if(minute<=10)
                        time = `${hour}:0${minute-1}:59`;
                    else
                        time = `${hour}:${minute-1}:59`;
                }
            }
        }
    }
    else{
        if(second<=10){
            time = `${(hour<10?'0'+hour:hour)}:${(minute<10?'0'+minute:minute)}:0${second-1}`;
        }
        else{
            time = `${(hour<10?'0'+hour:hour)}:${(minute<10?'0'+minute:minute)}:${second-1}`;
        }
    }
    return time;  
}
export function getTime(hr,min,sec){
    let time="";
    time+=(hr<10?`0${hr}`:toString(hr));
    time+=':';
    time+=(min<10?`0${min}`:toString(min));
    time+=':';
    time+=(sec<10?`0${sec}`:toString(sec));
    return time;
}
export function setTime(time){
    let second = parseInt(time[6]+time[7]);
    let minute = parseInt(time[3]+time[4]);
    let hour = parseInt(time[0]+time[1]);
    if(second==59){
        if(minute==59){
            if(hour==23){
                time='00:00:00';
            }
            else{
                if(hour<9){
                    time = `0${hour+1}:00:00`;
                }
                else{
                    time = `${hour+1}:00:00`;
                }
            }
        }
        else{
            if(minute<9){
                if(hour<9){
                    time = `0${hour}:0${minute}:00`;
                }
                else{
                    time = `${hour}:0${minute}:00`;
                }
            }
            else{
                if(hour<9){
                    time = `0${hour}:${minute}:00`;
                }
                else{
                    time = `${hour}:${minute}:00`;
                }
            }
        }
    }
    else{
        if(second<9){
            if(minute<9){
                if(hour<9){
                    time = `0${hour}:0${minute}:0${second+1}`;
                }
                else{
                    time = `${hour}:0${minute}:0${second+1}`;
                }
            }
            else{
                if(hour<9){
                    time = `0${hour}:${minute}:0${second+1}`;
                }
                else{
                    time = `${hour}:${minute}:0${second+1}`;
                }
            }
        }
        else{
            if(minute<9){
                if(hour<9){
                    time = `0${hour}:0${minute}:${second+1}`;
                }
                else{
                    time = `${hour}:0${minute}:${second+1}`;
                }
            }
            else{
                if(hour<9){
                    time = `0${hour}:${minute}:${second+1}`;
                }
                else{
                    time = `${hour}:${minute}:${second+1}`;
                }
            }
        }
    }
    return time;
}

export function getCurrentTime(){
    let currentTime = new Date().toLocaleTimeString("en-Us", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
    return currentTime;
}