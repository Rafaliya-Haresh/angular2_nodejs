'use strict';

/**
 * Load app configurations
 */
 

module.exports = require('./env/' + process.env.NODE_ENV) || {}
// module.exports = require('./env/development' + process.env.NODE_ENV) || {}