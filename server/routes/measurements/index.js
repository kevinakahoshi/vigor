const router = require('express').Router();

// Routes
const getMeasurements = require('./get-measurements');

router.use('/get-measurements', getMeasurements);

module.exports = router;
