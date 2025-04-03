import React from "react";
import "../styles/Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-box">
        <h3>Meals Donated</h3>
        <p>1000</p>
      </div>
      <div className="stat-box">
        <h3>Volunteers Joined</h3>
        <p>200</p>
      </div>
      <div className="stat-box">
        <h3>Food Waste Reduced (kg)</h3>
        <p>500</p>
      </div>
    </section>
  );
};

export default Stats;
