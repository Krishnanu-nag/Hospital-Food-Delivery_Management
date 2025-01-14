const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  // Importing the database connection
const patientRoutes = require('./routes/patientRoutes');
const dotenv = require('dotenv');

// Initialize the app
const app = express();
const PORT =process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Database connection
connectDB();  // Use the function to connect to MongoDB

// Routes
app.use('/api', patientRoutes);
app.use('/api', managePatientsRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
