import React from "react";
import "./App.css";
// import Navbar from "./Navbar";
// import Greeting from "./Greeting";
import Counter from "./Counter"


const App = () => {
  return (
    // <div>
    //   <Navbar />
    //   <Greeting name="Kanit !" age="21" />
    //   <Greeting name="Ken !" age= {16} />
    //   <Greeting />
    // </div>


    <div>
    <Counter step={5} />
    <Counter  step={10}/>
    </div>
  );
};

export default App;
