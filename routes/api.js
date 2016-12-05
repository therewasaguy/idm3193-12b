var express = require('express');
var router = express.Router();

var BlogPost = require('../models/blogpost');

router.get('/posts', function(req, res) {
  BlogPost.find({}, function(err, results) {
    res.send(results);
  });
});

router.post('/posts', function(req, res) {
  
  
});

router.put('/posts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
