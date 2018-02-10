'use strict';

const routes = [
  require('./restAPI/tradingView')
];

module.exports = function Router(app,router) {
  return routes.forEach((route) => {
    route(router);
    app.use(router.routes(), router.allowedMethods());
  });
};
