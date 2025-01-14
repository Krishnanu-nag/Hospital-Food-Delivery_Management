import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/ManagePatients.css";

const ManagePatient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch the list of patients from the backend
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/manage-patient");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="manage-patient-container">
      <h2>Patients List</h2>
      <div className="add-button-container">
        <Link to="/patient">
          <button
            className="add-button"
          >
            +
          </button>
        </Link>
      </div>
      <ul className="patients-list">
        {patients.map((patient) => (
          <li key={patient._id} className="patient-item">
            {patient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagePatient;
