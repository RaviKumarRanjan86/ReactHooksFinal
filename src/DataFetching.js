import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [data, setdata] = useState({});
  const [name, setname] = useState("");
  const [buttonName, setbuttonName] = useState(1);
  useEffect(() => {
    fetch(`https://api.genderize.io/?name=${buttonName}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setdata(() => {
          return json;
        });
      })
      .catch((error) => console.log(error));
  }, [buttonName]);

  console.log(data);

  const handleClick = () => {
    setbuttonName(name);
  };

  return (
    <>
      <h1>Gender Detector</h1>
      <h2>Enter your Name</h2>
      <input
        value={name}
        type="text"
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={handleClick}>Know your Gender</button>
      <h2>Your Gender is {data.gender}</h2>
    </>
  );
}

export default DataFetching;
