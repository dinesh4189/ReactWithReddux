export const ADD_COUNTER = "ADD_COUNTER";
export const ADD_COMMAND = "ADD_COMMAND";

export const addCounter = () => ({
  type: ADD_COUNTER,
  payload: 1
});

export const addCommands = text => ({
  type: ADD_COMMAND,
  command: text
});
