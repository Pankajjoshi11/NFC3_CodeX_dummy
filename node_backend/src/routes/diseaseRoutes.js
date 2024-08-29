const express = require('express');
const { createDiseaseReport, getDiseaseReportsByUser } = require('../controllers/diseaseController');

// Middleware to simulate authentication (replace with real auth middleware)
const authenticate = (req, res, next) => {
    // Simulate user authentication and attach user to request
    req.user = { _id: 'someUserId' };  // Replace with actual user ID from auth middleware
    next();
};

const router = express.Router();

// Route to create a new disease report (authenticated user required)
router.post('/diseaseReports', authenticate, createDiseaseReport);

// Route to get all disease reports for the authenticated user
router.get('/diseaseReports', authenticate, getDiseaseReportsByUser);

module.exports = router;
