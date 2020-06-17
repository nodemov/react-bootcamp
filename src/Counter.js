import React, { useState } from "react";
import "./style.css";
// how to use hook
const Counter = ({ step = 1 }) => {
  const [count, setCount] = useState(0);

  //useState "" [] 1

  return (
    <div>
      <h2 style={{ color: "red" }}>{count}</h2>
      <button onClick={() => setCount(count + step)}> + </button>
      <button onClick={() => setCount(count - step)}> - </button>
    </div>
  );
};

export default Counter;
