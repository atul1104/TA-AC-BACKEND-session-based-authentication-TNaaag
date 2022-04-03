var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', (req, res, next) => {
  res.render('register.ejs');
});

router.get('/login', (req, res, next) => {
  res.render('login.ejs');
});

module.exports = router;
