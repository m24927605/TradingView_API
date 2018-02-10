'use strict';

module.exports = (router) => {
  router.prefix('/tradingView')

  router.get('/', function (ctx, next) {
    console.log('wowowwww');
    ctx.body = 'this is a /tradingView response!'
  });

  router.get('/time', function (ctx, next) {
    ctx.body = 'this is a /tradingView/time response'
  });

  router.get('/config', function (ctx, next) {
    ctx.body = 'this is a /tradingView/config response'
  });

  router.get('/symbols', function (ctx, next) {
    ctx.body = 'this is a /tradingView/symbols response'
  });

  router.get('/history', function (ctx, next) {
    ctx.body = 'this is a /tradingView/history response'
  });
};

