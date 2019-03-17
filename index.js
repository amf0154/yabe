const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const app = new Koa();
const knex = require('./db/knex');
// log all events to the terminal
app.use(logger());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});
/*
var knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'myapp_test'
    }
  });
*/
// instantiate our new Router
const router = new Router();
// require our external routes and pass in the router
require('./routes/router')({ router });

// tells the router to use all the routes that are on the object
app.use(router.routes());
app.use(router.allowedMethods());

// tell the server to listen to events on a specific port
const server = app.listen(3000);
module.exports = server;
