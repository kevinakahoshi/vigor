const router = require('express').Router();

// Routes
const getUser = require('./get-user');
const createUser = require('./create-user');
const currentUser = require('./current-user');
const login = require('./login');
const logout = require('./logout');

router.use('/get-user', getUser);
router.use('/create-user', createUser);
router.use('/login', login);
router.use('/logout', logout);
router.use('/current-user', currentUser);

module.exports = router;
