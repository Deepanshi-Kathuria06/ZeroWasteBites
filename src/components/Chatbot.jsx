import React, { useState } from "react";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", type: "bot" },
  ]);

  const faqAnswers = {
    q1: "To donate food, sign up as a donor on our platform, list the available food, and NGOs will contact you.",
    q2: "NGOs, schools, hospitals, and verified individuals in need can request food by registering on our website.",
    q3: "You can use our website's 'Find NGO' feature to locate nearby organizations accepting food donations.",
    q4: "Yes, but only fresh, untouched, and hygienic leftover food can be donated. Spoiled or expired food is not allowed.",
    q5: "Ensure the food is freshly cooked, stored in hygienic conditions, and transported properly. Pack it securely before donation.",
    q6: "No, donating food is completely free. You just need to arrange for the food to be picked up by the recipient.",
    q7: "For assistance, email us at support@foodsave.com or call +91 9876543210."
  };

  const showAnswer = (question) => {
    setMessages((prev) => [...prev, { text: faqAnswers[question], type: "bot" }]);
  };

  const closeChat = () => setIsOpen(false);
  const openChat = () => setIsOpen(true);
  const exitChat = () => setIsOpen(null);

  if (isOpen === null) return null; // Removes chatbot when exited

  return (
    <>
      {!isOpen && <button className="open-chat-btn" onClick={openChat}>Open Chatbot</button>}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            <h3>Food Waste Chatbot</h3>
            <button className="close-btn" onClick={closeChat}>X</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <p key={index} className="bot-message">{msg.text}</p>
            ))}
            <div className="faq">
              {Object.keys(faqAnswers).map((key) => (
                <button key={key} className="faq-question" onClick={() => showAnswer(key)}>
                  {faqAnswers[key].split(" ").slice(0, 5).join(" ") + "..."} {/* Short preview */}
                </button>
              ))}
            </div>
            <button className="exit-btn" onClick={exitChat}>Exit Chatbot</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;