import React from "react";

import "./App.css";

const Navbar = () => {
  return (
    //  <nav>
    //     <ul>
    //     <li>Home</li>
    //     <li>Contact</li>
    //     <li>About</li>
    //     </ul>
    //  </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://github.com">
        React BootCamp
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="https://github.com">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="https://github.com">
          Contact
          </a>
          <a className="nav-item nav-link" href="https://github.com">
          About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
