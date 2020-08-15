const express = require('express');
const db = require('../../database');
const router = express.Router();

const getUser = router.get('/', (request, response, next) => {
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

module.exports = getUser;
