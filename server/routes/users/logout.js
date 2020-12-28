const router = require('express').Router();

router.post('/', (request, response, next) => {
  if (request.session.user) {
    delete request.session.user;
    response.status(202).json('User logged out successfully');
  } else {
    response.status(404).json('No user is currently logged in');
  }
  next();
});

module.exports = router;
