'use strict';

const routes = [
  require('./restAPI/index'),
  require('./restAPI/users')
];

module.exports = function Router(app, router) {
  return routes.forEach((route) => {
    app.use(router.routes(), router.allowedMethods());
  });
};
