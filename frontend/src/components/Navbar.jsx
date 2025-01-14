import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" id="font-figtree">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Hospital Food Delivery Management
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-links">
              Admin Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manage-patients" className="nav-links">
              Manage Patients
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-links">
              Reports/Analytics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;