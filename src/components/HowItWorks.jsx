import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Register Your Organization",
    description:
      "Tell us about your restaurant, supermarket, or food business and create your account in just a few minutes.",
    image: "your-image-url-1.jpg",
    color: "#009933",
  },
  {
    id: 2,
    title: "Schedule a Food Pickup",
    description:
      "Let us know when you have surplus food available and our team will arrange for collection at your convenience.",
    image: "your-image-url-2.jpg",
    color: "#ff8800",
  },
  {
    id: 3,
    title: "We Handle the Logistics",
    description:
      "Our trained volunteers will collect, package, and transport the food following all safety protocols.",
    image: "your-image-url-3.jpg",
    color: "#0077cc",
  },
  {
    id: 4,
    title: "Food Reaches Those in Need",
    description:
      "The food is distributed to our network of NGOs and community centers, helping feed people while reducing waste.",
    image: "your-image-url-4.jpg",
    color: "#990099",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>HOW IT ALL WORKS</h2>
      <h3>Simple Steps to Make a Difference</h3>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-number" style={{ backgroundColor: step.color }}>
              {step.id}
            </div>
            <img src={step.image} alt={step.title} className="step-image" />
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="actions">
        <div className="action-box">
          <h4>Need Food Assistance?</h4>
          <p>Request food for your community organization</p>
          <button className="request-food">Request Food</button>
        </div>
        <div className="action-box">
          <h4>Have Surplus Food?</h4>
          <p>Donate your excess food to those in need</p>
          <button className="donate-food">Donate Food</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
