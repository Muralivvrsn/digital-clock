import {createStore} from "redux";

const reduceFun = (state = {hours:0,minutes:0,seconds:0,INC:true}, action)=>{
    if(action.type==='hours'){
        return {hours:state.action.playload}
    }
    if(action.type==='minutes'){
        return {minutes:state.action.playload}
    }
    if(action.type==='seconds'){
        return {seconds:state.action.playload}
    }
    return state;
}

const store = createStore(reduceFun);
export default store;