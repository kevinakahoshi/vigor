const router = require('express').Router();

// Routes
const users = require('./users');

router.use('/api/users', users);

module.exports = router;
