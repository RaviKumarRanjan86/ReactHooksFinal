import React, { useState, useEffect, useRef } from "react";

function ClassTimer() {
  const [timer, settimer] = useState(0);

  useEffect(() => {
    setInterval((timer) => timer + 1, 1000);
    return clearInterval();
  }, []);

  return <></>;
}

export default ClassTimer;
