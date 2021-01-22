const initialState = {
  experience: 7,
  counter: 0
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  console.log(action);
  console.log("state----", state);
  if (action.type === "EXP_UP") {
    newState.experience++;
  }
  if (action.type === "EXP_DOWN") {
    newState.experience--;
  }
  if (action.type === "INC") {
    newState.counter = newState.counter + action.payload.id;
  }
  return newState;
};

export default reducer;
