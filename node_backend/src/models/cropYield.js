const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the cropYield model
const cropYieldSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Farmer', // Reference to the User model
        required: true
    },
    rainfall: {
        type: Number,
        required: true
    },
    fertilizer: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    nitrogen: {
        type: Number,
        required: true
    },
    phosphorous: {
        type: Number,
        required: true
    },
    potassium: {
        type: Number,
        required: true
    },
    yield: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // Optional: Adds createdAt and updatedAt fields
});

// Create the model
const CropYield = mongoose.model('CropYield', cropYieldSchema);

module.exports = CropYield;
