import React from "react";

const Greeting = ({ name = "Unknown", age = "12" }) => {
  const greet = () => {
    alert(`Hi ${name} age ${age}`);
  };
  return (
    <>
        <div style={{ backgroundColor:'#e9ecef'}} className="mt-2 mb-2 col-md-8 mx-auto rounded">
            <div className="card-body">
            <h1 className="card-title">Hello {name} age {age}</h1>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-warning" onClick={greet}>Click Me</button>

          </div>

          </div>
    </>
  );
};

export default Greeting;
