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
export function reducer(state,action){
    switch(action.type){
        case "hour": return {...state, hour:action.event.target.value};
        case "minute": return {...state, minute:action.event.target.value};
        case "second" : return {...state, second: action.event.target.value};
        default:
          return state;
      }
}
export function reduceTime(time){
    let ctime = time;
    if(time!=="00:00:00"){
        let second = parseInt(time[6] + time[7]);
        let minute = parseInt(time[3] + time[4]);
        let hour = parseInt(time[0]+time[1]);
        if(second == 0){
            if(hour!=0 && minute!=0){
                if(minute==0)
            }
        }

    }
}