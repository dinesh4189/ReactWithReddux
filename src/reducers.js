import { combineReducers } from "redux";
import { ADD_COUNTER } from "./actions";
import { ADD_COMMAND } from "./actions";

let commandList = ["text command"];

function counter(state = 0, action) {
  let newState;
  switch (action.type) {
    case ADD_COUNTER:
      console.log("in counter" + state, action.payload);
      return (newState = state + action.payload);
    default:
      return state;
  }
}

function commands(state = commandList, action) {
  return state;
}

const reducers = combineReducers({
  counter,
  commands
});

export default reducers;
