var routes = require('node-require-directory')(__dirname);
var logger = require('../config/logger');

module.exports.init = function(app) {
  Object.keys(routes).forEach(function(key) {
    logger.info('Initialising route: /' + key);
    // mount index (main) page
    if (key === 'index') return app.use('/', routes[key]);
    // skip config file
    if (key === 'config') return;
    // return
    return app.use('/' + key, routes[key]);
  });
};