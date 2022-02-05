const express = require('express');
const usersRouter = require('./users');
const entriesRouter = require('./entries');
const commentsRouter = require('./comments');

function routeAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router)
 app.use('/users', usersRouter);
 app.use('/entries', entriesRouter);
 app.use('/comments', commentsRouter);
}

module.exports = routeAPI;
