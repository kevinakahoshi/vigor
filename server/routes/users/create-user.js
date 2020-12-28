const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../../database');

router.post('/', (request, response, next) => {
  const columns = ['firstName', 'lastName', 'email', 'password'];

  columns.forEach((columnName) => {
    if (
      request.body[columnName] === undefined ||
      request.body[columns] === null ||
      !request.body[columns]
    ) {
      response.status(400).json('Missing signup details');
    }
  });

  const { firstName, lastName, email, password } = request.body;

  const sqlQuery = `
    INSERT INTO users ("firstName", "lastName", "email", "password")
    values ($1, $2, $3, $4)
  `;
  const saltRounds = 12;

  bcrypt.hash(password, saltRounds, (error, hash) => {
    const params = [firstName, lastName, email, hash];
    db.query(sqlQuery, params).then((result) => {
      console.log(result);
      return response.status(201).json('New User Created Successfully');
    });
    if (error) {
      next(error);
    }
  });
});

module.exports = router;
