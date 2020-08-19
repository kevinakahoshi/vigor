const router = require('express').Router();

router.post('/', (request, response, next) => {
  // const { userId } = request.body.user;
  response.json('asdfadsf').status(200);
});

module.exports = router;
