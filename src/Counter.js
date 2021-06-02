import React, { useReducer } from "react";

let initialState = 0;

const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return (count = count + 1);
    case "decrement":
      return count - 1;
    case "reset":
      return initialState;
    default:
      return count;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={dispatch("increment")}>increment</button>
    </>
  );
}

export default Counter;
