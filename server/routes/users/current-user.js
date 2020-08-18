const router = require('express').Router();

router.get('/', (request, response, next) => {
  response.status(200).json(request.session);
});

module.exports = router;
