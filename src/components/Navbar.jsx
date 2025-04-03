import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ZeroWasteBites</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#how-it-works">How it Works</a></li>
        <li><a href="#why-food-matters">Why Food Matters</a></li>
        <li><a href="#join-us">Join Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="login-btn">Login/Sign Up</button>
    </nav>
  );
};

export default Navbar;
