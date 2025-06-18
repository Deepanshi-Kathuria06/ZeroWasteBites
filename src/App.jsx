import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Join from "./join";
import Dashboard from "./Dashboard";
import Requester from "./requester";
import Login from "./Login";
import Signup from "./Signup";
import NGODashboard from "./NGODashboard";
import RestaurantDashboard from "./RestaurantDashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/requester" element={<Requester />} />
         <Route path="/ngo/dashboard" element={<NGODashboard />} />
        <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
