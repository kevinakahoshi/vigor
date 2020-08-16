const router = require('express').Router();

// Routes
const getUser = require('./get-user');
const createUser = require('./create-user');
const login = require('./login');

router.use('/get-user', getUser);
router.use('/create-user', createUser);
router.use('/login', login);

module.exports = router;
