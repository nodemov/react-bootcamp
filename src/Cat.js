import React from "react";

const Cat = () => {
  return (
    <div>
      <h2> I'm a Cat </h2>
      <hr />
      <h4>I'm a Robot </h4>
    </div>
  );
};

const RandomNumber = () => {
  let num = Math.floor(Math.random() * 10);
  //console.log(num);
  return (
    <div>
      <h5> Random number is { num } </h5>
      <h5> {num>5?'Big':'Small'} </h5>
    </div>
  );
};

const App = () => {
    return (
      <div>
        <Cat />
        <RandomNumber />
      </div>
    );
  };

export default App;
