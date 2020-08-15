const express = require('express');
const db = require('../../database');
const router = express.Router();

// Routes
const getUser = require('./get-user');

router.get('/?:id', getUser);

router.post('/', (request, response, next) => {
  const userId = request.body.userId;

  const sqlQuery = `
    SELECT *
      FROM users
     WHERE "UserID" = $1
  `;

  const params = [userId];

  db.query(sqlQuery, params)
    .then(result => response.status(200).json(result.rows[0]));
});

module.exports = router;
