require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const farmerRoutes = require('./routes/farmerRoutes');
const diseaseRoutes = require('./routes/diseaseRoutes');
const cropRoutes = require('./routes/cropRoute');
const connectDB = require('./config/db');
const CropYield = require('./models/cropYield');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// MongoDB connection


connectDB();

// Middlewa
app.use(bodyParser.json());

// Use routes
app.use('/api/farmers', farmerRoutes);
app.use('/api/disease', diseaseRoutes);
app.use('/api/crop',cropRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
