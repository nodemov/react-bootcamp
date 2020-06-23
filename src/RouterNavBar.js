import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";



const RouterNavBar = () => {

    const HomePage = () => <div>This is a Home Page</div>;
    const LoginPage = () => <div>This is a Login Page</div>;
    const RegisterPage = () => <div>This is a Register Page</div>;
    const ProfilePage = () => <div>This is the Profile Page</div>;
    const AboutPage = () => <div>This is an About Page</div>;
    const ContactPage = () => <div>This is a Contact Page</div>;

  return (
    <div className="base">
    <header>
      <p>React Router v5 Browser Example</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/me">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="container">
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component="{RegisterPage}" />
      <Route path="/me" component={ProfilePage} />
    </div>
    <footer>React Router v5 Browser Example (c) 2017</footer>
  </div>
  )
      
};

export default RouterNavBar;
