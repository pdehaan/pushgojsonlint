'use strict';

var stringify = require('canonical-json');

var getp = require('../lib/utils').getp;

var pushgojson = 'https://raw.githubusercontent.com/loads/loads-broker/master/pushgo.json';

module.exports = function (request, reply) {
  getp(pushgojson).then(function (data) {
    data = JSON.parse(data);
    reply.view('direct', {
      data: stringify(data, null, 2)
    });
  }, function (err) {
    console.error(err);
    reply.view('direct', {
      data: ''
    });
  });
};
