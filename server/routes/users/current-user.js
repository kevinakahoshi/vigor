const router = require('express').Router();

router.get('/', (request, response, next) => {
  if (request.session.user) {
    response.status(200).json(request.session.user);
  } else {
    response.status(404).json('Bad request');
  }
});

module.exports = router;
