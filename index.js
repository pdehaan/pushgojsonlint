'use strict';

var Joi = require('joi');

var schema = require('./schema');
var data = require('./pushgo.json');

Joi.validate(data, schema, function (err, value) {
  if (err) {
    throw err;
  }
  // Everything is valid, let's flood your console!
  console.log(JSON.stringify(value, null, 2));
});
