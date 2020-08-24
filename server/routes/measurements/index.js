const router = require('express').Router();

// Routes
const getMeasurements = require('./get-measurements');
const createMeasurement = require('./create-measurement');

router.use('/get-measurements', getMeasurements);
router.use('/create-measurement', createMeasurement);

module.exports = router;
