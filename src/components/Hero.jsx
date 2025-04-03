import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Fight Food Waste, Feed Those in Need</h1>
      <p>Connecting surplus food with people who need it most</p>
      <div className="hero-buttons">
        <button className="donate-btn">Donate Food</button>
        <button className="request-btn">Request Food</button>
      </div>
      <p className="stats-text">
        <strong>1,000+</strong> meals donated | <strong>500+</strong> people helped | <strong>2.5 tons</strong> waste prevented
      </p>
    </section>
  );
};

export default Hero;
