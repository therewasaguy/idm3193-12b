var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number
  }
});

var postSchema = new Schema({
  ratings: [ratingSchema],
  heading: String,
  body: String,
  date: {
    type: Date,
    default: Date.now
  }
});

postSchema.virtual('avgRating').get(function () {
  var total = 0;
  for (var i = 0; i < this.ratings.length; i++) {
    total += this.ratings[i];
  }
  return total / this.ratings.length;
});

var BlogPost = mongoose.model('Post', postSchema);


module.exports = BlogPost;