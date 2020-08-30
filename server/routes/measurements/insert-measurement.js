const router = require('express').Router();
const db = require('../../database');

router.post('/', (request, response, next) => {
  const measurementTypes = [
    'arms',
    'bodyFat',
    'chest',
    'hips',
    'thighs',
    'userId',
    'waist',
    'weight'
  ];

  for (const measurement of measurementTypes) {
    if (request.body[measurement] === undefined ||
      request.body[measurement] === null ||
      !request.body[measurement]) {
      response.status(400).json('Missing measurements');
    }
  }

  const {
    arms,
    bodyFat,
    chest,
    hips,
    thighs,
    userId,
    waist,
    weight
  } = request.body;

  const sqlQuery = `
    INSERT INTO measurements (arms, "bodyFat", chest, "createdAt", hips, thighs, "userId", waist, weight)
         VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4, $5, $6, $7, $8)
      RETURNING *
  `;

  const params = [
    arms,
    bodyFat,
    chest,
    hips,
    thighs,
    userId,
    waist,
    weight
  ];

  db.query(sqlQuery, params)
    .then(result => {
      if (result) {
        response.status(200).json(result.rows[0]);
      } else {
        response.status(500).json('An unexpected error occurred');
      }
    })
    .catch(error => console.error(error));
});

module.exports = router;
