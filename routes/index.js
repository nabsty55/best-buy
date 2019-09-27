var express = require('express');
var router = express.Router();
var Product = require('../models/items');

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

module.exports = router;
