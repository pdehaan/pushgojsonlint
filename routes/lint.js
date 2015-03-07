'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/lint/{uri*}',
    handler: require('../controllers/lint')
  }, {
    method: 'POST',
    path: '/lint',
    handler: require('../controllers/direct')
  }
];
