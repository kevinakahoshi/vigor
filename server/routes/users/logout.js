const router = require('express').Router();
const ClientError = require('../../client-error');

router.post('/', (request, response, next) => {
  if (request.session) {
    delete request.session;
    response.status(202).json('User logged out successfully');
  } else {
    next(new ClientError('No user is currently logged in', 404));
  }
});

module.exports = router;
