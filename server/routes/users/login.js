const router = require('express').Router();
const db = require('../../database');
const bcrypt = require('bcrypt');
const ClientError = require('../../client-error');
const camelCase = require('lodash').camelCase;

router.post('/', (request, response, next) => {
  const { email, password } = request.body;
  const sqlQuery = 'SELECT * FROM users WHERE "Email" = $1';
  const params = [email];

  db.query(sqlQuery, params)
    .then(result => {
      if (result) {
        const hashedPassword = result.rows[0].Password;
        bcrypt.compare(password, hashedPassword)
          .then(match => {
            if (!match) {
              next(new ClientError('Incorrect email or password', 400));
            }
            const user = {};
            for (const property in result.rows[0]) {
              if (property !== 'Password') {
                const camelcasedProperty = camelCase(property);
                user[camelcasedProperty] = result.rows[0][property];
              }
            }
            request.session.user = user;
            response.status(200).json(user);
          });
      } else {
        response.status(404).json('Whoops');
      }
    })
    .catch(error => next(error));
});

module.exports = router;
