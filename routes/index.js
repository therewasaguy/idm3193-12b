var express = require('express');
var router = express.Router();

var BlogPost = require('../models/blogpost');

/* GET home page. */
router.get('/', function(req, res, next) {
  BlogPost.find({}, function(err, results) {
    var posts = results.map(function(item) {
      return item;
    });
    console.log(posts);
    res.render('index', { 
      title: 'Blog Posts',
      posts: JSON.stringify(posts)
    });
  });

});

module.exports = router;
