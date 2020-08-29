const router = require('express').Router();

// Routes
const getMeasurements = require('./get-measurements');
const insertMeasurement = require('./insert-measurement');

router.use('/get-measurements', getMeasurements);
router.use('/insert-measurement', insertMeasurement);

module.exports = router;
