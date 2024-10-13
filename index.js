require('dotenv').config(); // Load environment variables

const express = require('express');
const connectDB = require('./config/db'); // Update the path to db.js
const userRoutes = require('./routes/userRoutes'); // Import user routes
// If you have employee routes
// const employeeRoutes = require('./routes/employeeRoutes'); 

const app = express();
const PORT = process.env.PORT || 4000; // Set the port

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the connectDB function

// Use routes
app.use('/api/v1/user', userRoutes); // User-related routes
// app.use('/api/v1/emp', employeeRoutes); // Employee-related routes (optional)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
