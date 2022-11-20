'use strict';

/**
 * decision service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::decision.decision');
