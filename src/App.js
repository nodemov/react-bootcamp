import React from "react";
import "./App.css";
import Navbar from "./Navbar";
// import Greeting from "./Greeting";
import Cart from "./Cart";
import Counter from "./Counter";
import From from "./Form";
import LoadData from "./LoadData";


const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
];

// <Greeting name="Ken !" age= {16} />
const App = () => {
  return (
    <div>
      <Navbar />
      <Cart initialItems={items} />
      <Counter step={5} />
      <From />
      <LoadData />
    </div>

    // <div>
    // <Counter step={5} />
    // <Counter  step={10}/>
    // </div>
  );
};

export default App;
