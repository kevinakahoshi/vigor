const router = require('express').Router();
const db = require('../../database');

router.post('/', (request, response, next) => {
  const exerciseInfo = ['exercise', 'amount', 'unit', 'userId'];

  exerciseInfo.forEach((dataPoint) => {
    if (
      request.body[dataPoint] === undefined ||
      request.body[dataPoint] === null ||
      !request.body[dataPoint]
    ) {
      response.status(400).json('Missing information about exercise');
    }
  });

  const { amount, exercise, unit, userId } = request.body;

  const sqlQuery = `
    INSERT INTO exercises (amount, "createdAt", exercise, unit, "userId")
         VALUES ($1, CURRENT_TIMESTAMP, $2, $3, $4)
      RETURNING *
  `;

  const params = [amount, exercise, unit, userId];

  db.query(sqlQuery, params)
    .then((result) => {
      if (result) {
        response.status(200).json(result.rows[0]);
        next();
      } else {
        response.status(500).json('An unexpected error occurred');
      }
    })
    .catch((error) => console.error(error));
});

module.exports = router;
