var express = require('express');
var router = express.Router();
var Product = require('../models/items');
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var itemChunk = [];
    var chunkSize = 3;
    for(var i = 0; i<docs.length; i += chunkSize){
      itemChunk.push(docs.slice(i, i + chunkSize));
    }

    res.render('index', { title: 'BestBuy', products: itemChunk });
  });

});

/* Get signup page*/
router.get('/signup', function(req, res, next){
  res.render('signup', {csrfToken: req.csrfToken()});
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));


router.get('/profile', function(req, res, next){
  res.render('/profile');
});

router.get('/login',function(req, res, next){
  res.render('login');
});
module.exports = router;
