'use strict';

var Joi = require('joi');
var P = require('promise');
var Wreck = require('wreck');

var schema = require('../schema');

module.exports = function (request, reply) {
  getp(request.params.uri).then(validatep).then(function (result) {
    reply({
      valid: true,
      result: result
    });
  }, function (err) {
    reply({
      valid: false,
      message: err.message || '(unknown error)'
    });
  });
};

function getp(uri) {
  return new P(function (resolve, reject) {
    Wreck.get(uri, function (err, res, payload) {
      if (err) {
        return reject(err);
      }
      if (res.statusCode !== 200) {
        err = new Error('[' + res.statusCode + '] ' + uri);
        return reject(err);
      }
      resolve(payload);
    });
  });
}

function validatep(data) {
  return new P(function (resolve, reject) {
    Joi.validate(data, schema, function (err, value) {
      if (err) {
        return reject(err);
      }
      resolve(value);
    });
  });
}
