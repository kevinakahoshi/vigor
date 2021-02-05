const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../../database');

router.post('/', (request, response, next) => {
  const { email, password } = request.body;
  const sqlQuery = 'SELECT * FROM users WHERE "email" = $1';
  const params = [email];

  // TODO: Remove timeout to test errors
  // setTimeout(() => {
  //   response.status(400).json('Incorrect email or password');
  // }, 5000);

  db.query(sqlQuery, params)
    .then((result) => {
      if (result.rows.length) {
        const hashedPassword = result.rows[0].password;
        bcrypt.compare(password, hashedPassword).then((match) => {
          if (!match) {
            response.status(400).json('Incorrect email or password');
          }
          const user = {
            userId: result.rows[0].userId,
            firstName: result.rows[0].firstName,
            lastName: result.rows[0].lastName,
            email: result.rows[0].email,
          };
          request.session.user = user;
          response.status(200).json(user);
        });
      } else {
        response.status(404).json('Incorrect email or password');
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
