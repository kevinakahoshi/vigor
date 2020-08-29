const router = require('express').Router();
const db = require('../../database');

router.post('/', (request, response, next) => {
  const { userId } = request.body;

  const sqlQuery = `
        SELECT *
          FROM exercises
         WHERE "userId" = $1
      ORDER BY exercise
           ASC
  `;

  const params = [userId];

  db.query(sqlQuery, params)
    .then(result => {
      const output = {};

      for (const row in result.rows) {
        const exerciseName = result.rows[row].exercise;
        if (output[exerciseName] === undefined) {
          output[exerciseName] = [];
        }
        output[exerciseName].push(result.rows[row]);
      }

      response.status(200).json(output);
    });
});

module.exports = router;
