import React, { useEffect, useState } from "react";
import { render } from "react-dom";

function FunctionalClassCounter() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    setcount(count + 2);
  };

  return (
    <>
      <h1>Count -{count}</h1>
      <button onClick={() => handleClick()}>Increment</button>
    </>
  );
}

export default FunctionalClassCounter;
