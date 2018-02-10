const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const bunyan = require('bunyan');
const bunyanOpts = require('./configs/bunyan.log.js');
const koaBunyanLogger = require('koa-bunyan-logger');
const helmet = require('koa-helmet');
const cors = require('koa2-cors');
const router = require('koa-router')();

const Route = require('./routes/collection');
const corsOptions = {
  origin: '*',
  credentials: true,
  exposedHeaders: '*',
  allowedHeaders: '*'
}
// error handler
onerror(app);

//bunyan log
const appLogger = bunyan.createLogger(bunyanOpts);

app.use(koaBunyanLogger(appLogger));
app.use(koaBunyanLogger.requestIdContext());
app.use(koaBunyanLogger.requestLogger());
// security module
app.use(helmet());

// accept cross domain
app.use(cors(corsOptions));

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
/*
app.use(require('koa-static')(__dirname + '/public'));
*/

/*
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));
*/
// logger
/*
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});
*/

Route(app, router);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
