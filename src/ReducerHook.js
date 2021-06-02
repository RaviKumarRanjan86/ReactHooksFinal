import React, { useReducer } from "react";

let initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={dispatch("increment")}>increment</button>
      <button onClick={dispatch("decrement")}>decrement</button>
      <button onClick={dispatch("reset")}>reset</button>
    </>
  );
}

export default ReducerHook;
