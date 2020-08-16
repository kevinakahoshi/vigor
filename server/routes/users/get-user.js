const router = require('express').Router();
const db = require('../../database');

router.get('/?:id', (request, response, next) => {
  let sqlQuery = `
    SELECT *
      FROM users
  `;

  const params = [];

  if (request.params) {
    const userId = request.params.id;
    sqlQuery += ' WHERE "UserID" = $1';
    params.push(userId);
  }

  db.query(sqlQuery, params).then(result => response.status(200).json(result.rows[0]));
});

router.post('/', (request, response, next) => {
  const userId = request.body.userId;

  const sqlQuery = `
    SELECT *
      FROM users
     WHERE "UserID" = $1
  `;

  const params = [userId];

  db.query(sqlQuery, params).then(result => response.status(200).json(result.rows[0]));
});

module.exports = router;
