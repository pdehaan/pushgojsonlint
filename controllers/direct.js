'use strict';

var utils = require('../lib/utils');

module.exports = function (request, reply) {
  utils.validatep(request.payload.data).then(function (result) {
    reply({
      valid: true,
      result: result
    });
  }, function (err) {
    reply({
      valid: false,
      details: err.details,
      message: err.message || '(unknown error)'
    });
  });
};
