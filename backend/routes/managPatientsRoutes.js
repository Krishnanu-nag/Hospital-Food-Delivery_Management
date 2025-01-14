const express = require('express');
const router = express.Router();

// Route to fetch all patients
router.get('/manage-patients', async (req, res) => {
  try {
    const patients = await Patient.find(); // Fetch all patients
    res.status(200).json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ message: 'Failed to fetch patients' });
  }
});

module.exports = router;
