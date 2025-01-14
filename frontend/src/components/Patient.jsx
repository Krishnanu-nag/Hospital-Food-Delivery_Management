import React, { useState } from "react";
import axios from "axios";
import "../styles/Patient.css";

const Patient = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    diseases: "",
    allergies: "",
    roomNumber: "",
    bedNumber: "",
    floorNumber: "",
    age: "",
    gender: "",
    contactInfo: "",
    emergencyContact: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/patient", patientData);
      setModalMessage("Patient details saved successfully!");
      setModalVisible(true);
      setPatientData({
        name: "",
        diseases: "",
        allergies: "",
        roomNumber: "",
        bedNumber: "",
        floorNumber: "",
        age: "",
        gender: "",
        contactInfo: "",
        emergencyContact: "",
      });
    } catch (error) {
      console.error("Error saving patient details:", error);
      setModalMessage("Failed to save patient details.");
      setModalVisible(true);
    }
  };

  return (
    <div className="manage-patient-container">
      <h2>Manage Patient Details</h2>
      <form className="patient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={patientData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="diseases"
          placeholder="Diseases"
          value={patientData.diseases}
          onChange={handleChange}
        />
        <input
          type="text"
          name="allergies"
          placeholder="Allergies"
          value={patientData.allergies}
          onChange={handleChange}
        />
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={patientData.roomNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bedNumber"
          placeholder="Bed Number"
          value={patientData.bedNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="floorNumber"
          placeholder="Floor Number"
          value={patientData.floorNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={patientData.age}
          onChange={handleChange}
          required
        />
        <select name="gender" value={patientData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Information"
          value={patientData.contactInfo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={patientData.emergencyContact}
          onChange={handleChange}
          required
        />
        <button type="submit">Save Patient Details</button>
      </form>
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={() => setModalVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patient;