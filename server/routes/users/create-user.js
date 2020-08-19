const router = require('express').Router();
const db = require('../../database');
const bcrypt = require('bcrypt');

router.post('/', (request, response, next) => {
  const { firstName, lastName, email, password } = request.body;
  const sqlQuery = `
    INSERT INTO users ("firstName", "lastName", "email", "password")
    values ($1, $2, $3, $4)
  `;
  const saltRounds = 12;

  bcrypt.hash(password, saltRounds, (error, hash) => {
    const params = [
      firstName,
      lastName,
      email,
      hash
    ];
    db.query(sqlQuery, params)
      .then(result => response.status(201).json('New User Created Successfully'))
      .catch(error => next(error));
    if (error) {
      console.error(error);
    }
  });
});

module.exports = router;
