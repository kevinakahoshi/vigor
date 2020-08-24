const router = require('express').Router();
const db = require('../../database');

router.post('/', (request, response, next) => {
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
      response.status(200).json('Measurement created successfully');
    })
    .catch(error => console.error(error));
});

module.exports = router;
