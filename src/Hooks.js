import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You click {count} times</p>
        <button
          style={{
            padding: "8px 16px",
            borderRadius: 4,
            border: 0,
            backgroundColor: "#61dafb",
            fontSize: "1.25rem",
          }}
          onClick={() => setCount(count + 1)}
        >
          Click me +
        </button>
        <button
        style={{
          padding: "8px 16px",
          marginTop: '12px',
          borderRadius: 4,
          border: 0,
          backgroundColor: "#61dafb",
          fontSize: "1.25rem",
        }}
        onClick={() => setCount(count - 1)}
      >
        Click me -
      </button>
      </header>
    </div>
  );
};

export default Hooks;
