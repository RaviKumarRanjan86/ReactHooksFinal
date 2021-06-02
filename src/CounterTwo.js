import React, { useReducer } from "react";

let initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...initialState,
        firstCounter: state.firstCounter + action.value
      };
    case "decrement":
      return state.value - 1;
    case "reset":
      return initialState.value;
    default:
      return state.value;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count - {initialState.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        increment5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        decrement5
      </button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </>
  );
}

export default CounterTwo;
