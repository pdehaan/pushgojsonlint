'use strict';

var Joi = require('joi');

module.exports = Joi.object().keys({
  'name': Joi.string(),
  'plans': Joi.array().items(
    Joi.object().keys({
      'name': Joi.string(),
      'description': Joi.string().optional(),
      'steps': Joi.array().items(
        Joi.object().keys({
          'additional_command_args': Joi.string().optional(),
          'container_name': Joi.string(),
          'container_url': Joi.string(),
          'dns_name': Joi.string(),
          'docker_series': Joi.string(),
          'environment_data': Joi.array(),
          'instance_count': Joi.number().integer(),
          'instance_region': Joi.string(),
          'instance_type': Joi.string(),
          'name': Joi.string(),
          'port_mapping': Joi.string(),
          'prune_running': Joi.boolean().optional(),
          'run_delay': Joi.number().optional(),
          'run_max_time': Joi.number().integer(),
          'volume_mapping': Joi.string()
        })
      )
    })
  )
});
