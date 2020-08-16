const router = require('express').Router();
const db = require('../../database');
// const bcrypt = require('bcrypt');
// const ClientError = require('../../client-error');

router.post('/', (request, response, next) => {
  const { firstName, lastName, email, password } = request.body;
  // const saltRounds = 12;
  const sqlQuery = `
    INSERT INTO users ("FirstName", "LastName", "Email", "Password")
               values ($1, $2, $3, $4)
  `;
  const params = [firstName, lastName, email, password];
  db.query(sqlQuery, params).then(result => response.status(201).json('Created New User Successfully'));
});

module.exports = router;
