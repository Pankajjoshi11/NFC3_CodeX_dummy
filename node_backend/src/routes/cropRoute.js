const express = require('express');
const router = express.Router();
const cropController = require('../controllers/cropController');

// Define routes
router.post('/crop-yield/:userId', cropController.findUserById, cropController.createCropYield);
router.get('/crop-yields/:userId', cropController.findUserById, cropController.getCropYields);

module.exports = router;
