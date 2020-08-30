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
    .then(exercises => {
      const output = {};
      for (const row in exercises.rows) {
        const exerciseName = exercises.rows[row].exercise;
        if (output[exerciseName] === undefined) {
          output[exerciseName] = [];
        }
        output[exerciseName].push(exercises.rows[row]);
      }
      response.status(200).json(output);
    });
});

module.exports = router;
