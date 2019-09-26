var express = require('express');
var router = express.Router();
var Product = require('../models/items');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find();
  res.render('index', { title: 'BestBuy', products: products });
});

module.exports = router;
