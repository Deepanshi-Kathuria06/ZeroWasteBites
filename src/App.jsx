import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Join from "./join" // Make sure this matches your component file name
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<Join />} /> {/* lowercase 'j' to match the navigation */}
      </Routes>
    </div>
  );
}

export default App;