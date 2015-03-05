'use strict';

var Joi = require('joi');
var Wreck = require('wreck');

var schema = require('../schema');

module.exports = {
  method: 'GET',
  path: '/lint/{uri*}',
  handler: function (request, reply) {
    Wreck.get(request.params.uri, function (err, res, payload) {
      if (res.statusCode === 404) {
        return reply({
          valid: false,
          message: 'cannot find ' + request.params.uri
        });
      }
      if (err) {
        return reply({
          valid: false,
          message: err.message
        });
      }
      Joi.validate(payload, schema, function (err2, value) {
        if (err2) {
          return reply({
            valid: false,
            message: err2.message
          });
        }
        reply({
          valid: true
        });
      });
    });
  }
};
