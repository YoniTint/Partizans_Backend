'use strict';

/**
 * decision router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::decision.decision');
