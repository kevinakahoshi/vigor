require('dotenv/config');
const express = require('express');
// const routes = require('./routes');
const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());
// app.use(routes);

app.get('/api/users/?:id', (request, response, next) => {
  let sqlQuery = `
    SELECT *
      FROM users
  `;

  const params = [];

  if (request.params) {
    const userId = request.params.id;
    sqlQuery += ' WHERE "UserID" = $1';
    params.push(userId);
  }

  db.query(sqlQuery, params).then(result => response.status(200).json(result.rows[0]));
});

app.post('/api/users', (request, response, next) => {
  const userId = request.body.userId;

  const sqlQuery = `
    SELECT *
      FROM users
     WHERE "UserID" = $1
  `;

  const params = [userId];

  db.query(sqlQuery, params)
    .then(result => response.status(200).json(result.rows[0]));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
