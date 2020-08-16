const router = require('express').Router();

// Routes
const getUser = require('./get-user');
const createUser = require('./create-user');

router.use('/get-user', getUser);
router.use('/create-user', createUser);

module.exports = router;
