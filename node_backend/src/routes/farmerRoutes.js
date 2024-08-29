const express = require('express');
const { signUp, logIn } = require('../controllers/farmerController');

const router = express.Router();

// Sign-up route
router.post('/signup', signUp);

// Login route
router.post('/login', logIn);

module.exports = router;
