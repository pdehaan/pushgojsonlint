'use strict';

module.exports = {
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Usage: <a href="/lint/https://raw.githubusercontent.com/loads/loads-broker/master/pushgo.json">/lint/{uri}</a>');
  }
};
