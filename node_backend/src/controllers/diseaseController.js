const DiseaseReport = require('../models/diseaseReport');
const Farmer = require('../models/Farmer');

// Controller function to create a new disease report
const createDiseaseReport = async (req, res) => {
    try {
        const { diseaseName, diseaseInfo, stepsToCure } = req.body;
        const userId = req.user._id;  // Assuming user ID is attached to req.user

        // Create and save new disease report associated with the user
        const newReport = new DiseaseReport({
            diseaseName,
            diseaseInfo,
            stepsToCure,
            user: userId
        });
        await newReport.save();

        res.status(201).json({ message: 'Disease report created successfully', report: newReport });
    } catch (error) {
        console.error('Error creating disease report:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller function to get all disease reports for a user
const getDiseaseReportsByUser = async (req, res) => {
    try {
        const userId = req.user._id;  // Assuming user ID is attached to req.user

        // Find all disease reports associated with the user
        const reports = await DiseaseReport.find({ user: userId });
        res.json(reports);
    } catch (error) {
        console.error('Error fetching disease reports:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createDiseaseReport, getDiseaseReportsByUser };
