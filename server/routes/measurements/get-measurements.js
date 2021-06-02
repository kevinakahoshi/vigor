const router = require('express').Router();
const db = require('../../database');

router.post('/', (request, response, next) => {
  const { userId } = request.body;
  const sqlQuery = `
    SELECT *
      FROM measurements
     WHERE "userId" = $1
  `;

  const params = [userId];

  db.query(sqlQuery, params)
    .then((measurements) => {
      response.status(200).json(measurements.rows);
    })
    .catch((error) => console.error(error));

  // next();
});

module.exports = router;
