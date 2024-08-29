const bcrypt = require('bcryptjs');
const Farmer = require('../models/Farmer');

// Controller for handling farmer sign-up
const signUp = async (req, res) => {
    try {
        const { name, field, password, location, landArea } = req.body;

        // Check if the farmer already exists
        let farmer = await Farmer.findOne({ name });
        if (farmer) return res.status(400).json({ message: 'Farmer already exists' });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save new farmer
        farmer = new Farmer({ name, field, passwordHash: hashedPassword, location, landArea });
        await farmer.save();

        res.status(201).json({ message: 'Farmer registered successfully' });
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller for handling farmer login
const logIn = async (req, res) => {
    try {
        const { name, password } = req.body;

        // Find farmer by name
        const farmer = await Farmer.findOne({ name });
        if (!farmer) return res.status(400).json({ message: 'Invalid credentials' });

        // Check password
        const isMatch = await bcrypt.compare(password, farmer.passwordHash);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Login successful
        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { signUp, logIn };
