'use strict';

var Hapi = require('hapi');

var routes = require('./routes/index').routes;
var views = require('./views');

var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});
server.route(routes);
server.views(views);

module.exports = server;
