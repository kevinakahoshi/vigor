const router = require('express').Router();
const db = require('../../database');
const bcrypt = require('bcrypt');
const ClientError = require('../../client-error');

router.post('/', (request, response, next) => {
  const { email, password } = request.body;
  const sqlQuery = 'SELECT * FROM users WHERE "email" = $1';
  const params = [email];

  db.query(sqlQuery, params)
    .then(result => {
      if (result.rows.length) {
        const hashedPassword = result.rows[0].password;
        bcrypt.compare(password, hashedPassword)
          .then(match => {
            if (!match) {
              response.status(400).json('Incorrect email or password');
              next(new ClientError('Incorrect email or password', 400));
            }
            delete result.rows[0].password;
            request.session.user = result.rows[0];
            response.status(200).json(result.rows[0]);
          });
      } else {
        response.status(404).json('Whoops');
      }
    })
    .catch(error => next(error));
});

module.exports = router;
