'use strict';

var server = require('./server');

server.start(function () {
  console.log('Hapi server running at: %s', server.info.uri);
});
