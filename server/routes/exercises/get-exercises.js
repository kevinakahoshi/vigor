const router = require('express').Router();
const db = require('../../database');

router.post('/', (request, response, next) => {
  const { userId } = request.body;

  const sqlQuery = `
    SELECT *
      FROM exercises
     WHERE "userId" = $1
  `;

  const params = [userId];

  db.query(sqlQuery, params)
    .then(result => {
      response.status(200).json(result.rows);
    });
});

module.exports = router;
