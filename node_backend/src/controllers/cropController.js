const CropYield = require('../models/cropYield');
const User = require('../models/Farmer');

// Middleware to find user by ID
const findUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error finding user', error });
    }
};

// Create a new crop yield
const createCropYield = async (req, res) => {
    try {
        const { rainfall, fertilizer, temperature, nitrogen, phosphorous, potassium, yield } = req.body;

        const cropYield = new CropYield({
            user: req.user._id, // Associate crop yield with the user
            rainfall,
            fertilizer,
            temperature,
            nitrogen,
            phosphorous,
            potassium,
            yield
        });

        await cropYield.save();
        res.status(201).json(cropYield);
    } catch (error) {
        res.status(500).json({ message: 'Error creating crop yield', error });
    }
};

// Get crop yields for a specific user
const getCropYields = async (req, res) => {
    try {
        const cropYields = await CropYield.find({ user: req.user._id });
        res.status(200).json(cropYields);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving crop yields', error });
    }
};

module.exports = {
    findUserById,
    createCropYield,
    getCropYields
};
