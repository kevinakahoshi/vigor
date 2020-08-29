const router = require('express').Router();

// Routes
const users = require('./users');
const measurements = require('./measurements');
const exercises = require('./exercises');

router.use('/api/users', users);
router.use('/api/measurements', measurements);
router.use('/api/exercises', exercises);

module.exports = router;
