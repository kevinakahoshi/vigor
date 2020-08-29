const router = require('express').Router();

// Routes
const getExercises = require('./get-exercises');
const insertExercise = require('./insert-exercise');

router.use('/get-exercises', getExercises);
router.use('/insert-exercise', insertExercise);

module.exports = router;
