'use strict';

var Joi = require('joi');
var awstypes = require('awstypes');

var instanceRegions = awstypes.getRegions(true); // only retrieve keys
var instanceTypes = awstypes.getTypes('t2.', 'm3.', 'c4.', 'c3.');

module.exports = Joi.object().keys({
  'name': Joi.string().required(),
  'plans': Joi.array().required().items(
    Joi.object().keys({
      'name': Joi.string().required(),
      'description': Joi.string().optional(),
      'steps': Joi.array().required().items(
        Joi.object().keys({
          // required
          'container_name': Joi.string().required(),
          'docker_series': Joi.string().required(),
          'instance_count': Joi.number().required().integer(),
          'instance_region': Joi.string().required().valid(instanceRegions),
          'instance_type': Joi.string().required().valid(instanceTypes),
          'name': Joi.string().required(),
          'run_max_time': Joi.number().required().integer(),

          // optional
          'additional_command_args': Joi.string().optional(),
          'container_url': Joi.string().optional(),
          'dns_name': Joi.string().optional(),
          'environment_data': Joi.array().optional(),
          'port_mapping': Joi.string().optional(),
          'prune_running': Joi.boolean().optional(),
          'run_delay': Joi.number().optional(),
          'volume_mapping': Joi.string().optional()
        })
      )
    })
  )
});
