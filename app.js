var express           = require('express');
var path              = require('path');
var favicon           = require('serve-favicon');
var morgan            = require('morgan');
var logger            = require('./config/logger');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var session           = require('express-session');
var i18n              = require('./config/i18n');
//var expressValidator  = require('./config/expressValidator');
//var flash             = require('./config/flash');
//var passport          = require('./config/passport');
var routes            = require('./routes/config');
var app               = express();

// initialize logging middleware
app.use(morgan("combined", { "stream": logger.stream } ));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// i18n configuration
i18n.init(app);

// Express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

/* Leaving space here for passport initialization */

// route configuration
routes.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
