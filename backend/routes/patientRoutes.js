
const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');

// Route to save patient details
router.post('/patient', async (req, res) => {
  try {
    const { name, diseases, allergies, roomNumber, bedNumber, floorNumber, age, gender, contactInfo, emergencyContact } = req.body;

    // Create a new patient
    const newPatient = new Patient({
      name,
      diseases,
      allergies,
      roomNumber,
      bedNumber,
      floorNumber,
      age,
      gender,
      contactInfo,
      emergencyContact,
    });

    // Save patient data to the database
    await newPatient.save();

    // Send a success response
    res.status(201).json({ message: 'Patient details saved successfully!' });
  } catch (error) {
    console.error('Error saving patient details:', error);
    res.status(500).json({ message: 'Failed to save patient details.' });
  }
});

module.exports = router;
