// i18n.js configuration
var i18n = require('i18n');
var path = require('path');
 
var options = {
  locales: ['en'],
  directory: path.join(__dirname, '../local/en_us'), // <--- use here. Specify translations files path. 
  cookie: 'i18nCookie'
};

module.exports.init = function(app){
  i18n.configure(options);
  app.use(i18n.init);
};