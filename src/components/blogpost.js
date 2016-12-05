import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class BlogPost extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onStarClick(nextValue, prevValue, name) {
      this.props.updateStarRating(this.props.index, nextValue);
  }
  render() {
    return (
      <div className="blogpost">
        <h1>{this.props.heading}</h1>
        <p>
          {this.props.body}
        </p>
        <StarRatingComponent
          starCount={10}
          value={this.props.rating}
          onStarClick={this.onStarClick.bind(this)}
          name={"star" + this.props.index}
        />
    </div>
    )
  }
}

export default BlogPost;