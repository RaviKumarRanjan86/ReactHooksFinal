import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(count);
  }, [count]);

  return <h1>{count}</h1>;
}

export default IntervalHookCounter;
