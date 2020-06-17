import React from "react";

const Greeting = ({name="Unknown",age="12"}) => {

    const greet = () => {
        alert(`Hi ${name} age ${age}`)
    }
  return (
    <>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">
          Hello {name} age {age}
        </h1>
        <button onClick={greet}>Click Me</button>
      </div>
    </div>
    </>
  );
};

export default Greeting;
