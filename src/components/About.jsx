import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/ab2.png"; 

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <img src={aboutImage} alt="Volunteers packing food" className="about-image" />
        <div className="about-text">
          <h2>About ZeroWasteBites</h2>
          <p>
            ZeroWasteBites is revolutionizing food distribution by connecting surplus food 
            from businesses with communities in need. Our mission is to eliminate food waste 
            while fighting hunger through innovative technology and community partnerships.
          </p>
          <h3>Our Impact:</h3>
          <ul>
            <li>1,000+ meals donated</li>
            <li>500+ people helped</li>
            <li>2.5 tons of waste prevented</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
