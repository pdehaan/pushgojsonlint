'use strict';

module.exports = function (request, reply) {
  reply.view('home', {
    uri: 'https://raw.githubusercontent.com/loads/loads-broker/master/pushgo.json'
  });
};
