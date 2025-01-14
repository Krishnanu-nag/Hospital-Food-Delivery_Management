import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="center-div">
        <div className="landing-container">
      <header className="landing-header">
        <h1>Hospital Food Delivery Management System</h1>
        <p>Streamlining meal preparation and delivery for better patient care.</p>
        <div className="button-container">
          <Link to="/dashboard" className="btn">Admin Dashboard</Link>
          <Link to="/manage-patients" className="btn">Manage Patients</Link>
        </div>
      </header>
    </div>
    </div>
  );
};

export default LandingPage;