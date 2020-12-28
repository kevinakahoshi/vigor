const router = require('express').Router();
// const db = require('../../database');

router.get('/', (request, response, next) => {
  if (request.session.user) {
    response.status(200).send(request.session.user);
  } else {
    response.status(404).json('');
  }
  next();
});

module.exports = router;
