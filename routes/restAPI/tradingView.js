'use strict';

module.exports = (router) => {
  const reqValidate = require('../../services/helper/req.validate')();

  router.prefix('/tradingView')

  router.get('/', async (ctx, next) => {
    ctx.body = 'this is a /tradingView response!'
  });


  router.get('/time', async (ctx, next) => {
    ctx.body = 'this is a /tradingView/time response'
  });

  router.get('/config', async (ctx, next) => {
    ctx.body = 'this is a /tradingView/config response'
  });

  //參數檢查層
  router.use('/symbols', (ctx, next) => {
    reqValidate.checkQuery('symbols', ctx, next);
  });
  router.get('/symbols', async (ctx, next) => {
    ctx.body = 'this is a /tradingView/symbols response'
  });

  //參數檢查層
  router.use('/history', (ctx, next) => {
    reqValidate.checkQuery('history', ctx, next);
  });
  router.get('/history', async (ctx, next) => {
    ctx.body = 'this is a /tradingView/history response'
  });
};

