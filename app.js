/**
 * Project Name
 * 0.0.0
 *
 */

// deps
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('mongoose');

// routes
var routes = require('./routes/index');
var users = require('./routes/users');

/**
 * init
 */

// app
var app = express();

// routes
var routes = require('./routes/index');
app.use('/', routes);

// views
var hbs = require('./config/handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// models
fs.readdirSync(__dirname + '/models')
.forEach(function(filename) {
  if (~filename.indexOf('.js')) require('./models/' + filename);
});

// db
db.connect('mongodb://localhost/myapp');

// server
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
