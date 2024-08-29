const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for DiseaseReport
const diseaseReportSchema = new Schema({
    diseaseName: { type: String, required: true },
    diseaseInfo: { type: String, required: true },
    stepsToCure: { type: [String], required: true },  // Array of strings for multiple steps
    user: { type: Schema.Types.ObjectId, ref: 'Farmer', required: true } // Reference to Farmer model
}, { timestamps: true });

// Create the model based on the schema
const DiseaseReport = mongoose.model('DiseaseReport', diseaseReportSchema);

module.exports = DiseaseReport;
