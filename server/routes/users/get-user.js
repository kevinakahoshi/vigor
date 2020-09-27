const router = require('express').Router();
// const db = require('../../database');

router.get('/', (request, response, next) => {
  if (request.session.user) {
    response.status(200).send(request.session.user);
  } else {
    response.status(404).json('');
  }
});

// router.get('/:id?', (request, response, next) => {
//   let sqlQuery = `
//     SELECT *
//       FROM users
//   `;

//   const params = [];

//   if (request.params.id) {
//     const userId = request.params.id;
//     sqlQuery += ' WHERE "userId" = $1';
//     params.push(userId);
//   }

//   db.query(sqlQuery, params)
//     .then(result => {
//       for (const item of result.rows) {
//         delete item.password;
//       }
//       response.status(200).send(result.rows);
//     });
// });

// router.post('/', (request, response, next) => {
//   const userId = request.body.userId;

//   const sqlQuery = `
//     SELECT *
//       FROM users
//      WHERE "userId" = $1
//   `;

//   const params = [
//     userId
//   ];

//   db.query(sqlQuery, params).then(result => {
//     delete result.rows[0].password;
//     response.status(200).json(result.rows[0]);
//   });
// });

module.exports = router;
