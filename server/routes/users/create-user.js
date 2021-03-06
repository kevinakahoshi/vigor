const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../../database');
const {
  validEmail,
  validName,
  validPassword,
} = require('../../utilities/regex');

router.post('/', (request, response, next) => {
  const columns = ['firstName', 'lastName', 'email', 'password'];

  columns.forEach((columnName) => {
    if (
      request.body[columnName] === undefined ||
      request.body[columnName] === null ||
      !request.body[columnName]
    ) {
      response.json('Missing signup details');
    }
  });

  const { firstName, lastName, email, password } = request.body;

  if (request.session.user.email === email) {
    response.status(400).json('Bad request');
  }

  if (!validName.test(firstName) || !validName.test(lastName)) {
    response.status(400).json('Invalid name');
  }

  if (!validEmail.test(email)) {
    response.status(400).json('Invalid email address');
  }

  if (!validPassword.test(password)) {
    response.status(400).json('Invalid password');
  }

  const lowerCaseEmail = email.toLowerCase();

  // TODO: Remove Timeout when done testing errors
  setTimeout(() => response.status(400).json('Test error'), 5000);

  // const sqlQuery = `
  //   INSERT INTO users ("firstName", "lastName", "email", "password")
  //   values ($1, $2, $3, $4)
  // `;
  // const saltRounds = 12;

  // bcrypt.hash(password, saltRounds, (error, hash) => {
  //   const params = [firstName, lastName, lowerCaseEmail, hash];
  //   db.query(sqlQuery, params).then((result) => {
  //     console.log(result);
  //     return response.status(201).json('Account created successfully');
  //   });
  //   if (error) {
  //     next(error);
  //   }
  // });
});

module.exports = router;
