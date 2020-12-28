const router = require('express').Router();
const db = require('../../database');

router.post('/', (request, response, next) => {
  const { userId } = request.body;

  const sqlQuery = `
        SELECT *
          FROM exercises
         WHERE "userId" = $1
      ORDER BY exercise ASC, "exerciseId" ASC
  `;

  const params = [userId];

  db.query(sqlQuery, params).then(({ rows }) => {
    const output = {};

    Object.keys(rows).forEach((row) => {
      const exerciseName = rows[row].exercise;
      if (output[exerciseName] === undefined) {
        output[exerciseName] = [];
      }
      output[exerciseName].push(rows[row]);
    });

    response.status(200).json(output);
    next();
  });
});

module.exports = router;
