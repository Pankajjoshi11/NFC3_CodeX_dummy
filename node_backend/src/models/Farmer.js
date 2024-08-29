const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Farmer
const farmerSchema = new Schema({
    name: { type: String, required: true, unique: true },
    field: { type: String, required: true },
    passwordHash: { type: String, required: true },
    location: { type: String },
    landArea: { type: Number }
}, { timestamps: true });

// Create the model based on the schema
const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
