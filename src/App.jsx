import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

import Chatbot from "./components/chatbot";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      {/* <About /> */}
      <Chatbot />
      
    </div>
  );
}

export default App;
