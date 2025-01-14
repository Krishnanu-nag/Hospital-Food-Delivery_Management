import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Patient from "./components/Patient";
import ManagePatients from "./components/ManagePatients";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-patients" element={<ManagePatients/>} />
        <Route path="/patient" element={<Patient/>} />
      </Routes>
    </Router>
  );
}

export default App;