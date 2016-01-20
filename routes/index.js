var express = require('express');
var router = express.Router();

var users = require('./users');

// home
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// heads
router.use('/users', users);

module.exports = router;
