const router = require('express').Router();

// Routes
const users = require('./users');
const measurements = require('./measurements');

router.use('/api/users', users);
router.use('/api/measurements', measurements);

module.exports = router;
