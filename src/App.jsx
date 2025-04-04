import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Join from "./join"; // Make sure this matches your component file name
import Dashboard from "./Dashboard";
import Requester from "./requester"; // Changed to match component name

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/requester" element={<Requester />} /> {/* Fixed component name */}
      </Routes>
    </div>
  );
}

export default App;