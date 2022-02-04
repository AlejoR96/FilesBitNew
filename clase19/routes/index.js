const usersRouter = require('./users');
const entriesRouter = require('./entries');
const commentsRouter = require('./comments');

function routeAPI(app) {
 app.use('/users', usersRouter);
 app.use('/entries', entriesRouter);
 app.use('/comments', commentsRouter);
}

module.exports = routeAPI;
