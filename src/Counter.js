import React, { useState } from "react";
import "./style.css";
// how to use hook
const Counter = ({ step = 1 }) => {
  const [count, setCount] = useState(0);

  //useState "" [] 1

  return (
    <div className="card text-center mx-auto w-50">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link active" href="{null}">Counter</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="{null}">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="{null}" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">{ count }</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button className="btn btn-success" onClick={() => setCount(count + step)}> Click Me + </button>
    <button className="btn btn-danger ml-2" onClick={() => setCount(count - step)}> Click Me - </button>
  </div>
</div>
  );
};

export default Counter;
