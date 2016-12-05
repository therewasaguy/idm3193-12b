import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import BlogPost from './components/blogpost';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        posts: window.posts || []
      }
    }
    updateStarRating(index, rating) {
      var newPosts = this.state.posts;
      console.log(index);
      newPosts[index].rating = rating;
      this.setState({
        posts: newPosts
      });
      
      // update API here
    }
    render() {
        // use map => function to preserve "this"
        var blogPosts = this.state.posts.map((post, index) => {
           return <BlogPost
                  heading={this.state.posts[index].heading}
                  body={this.state.posts[index].body}
                  rating={this.state.posts[index].rating}
                  id={this.state.posts[index]._id}
                  key={index}
                  index={index}
                  updateStarRating={this.updateStarRating.bind(this)}
                />
        });

        return (                
            <div>
                <h2>Blog Posts</h2>
                {blogPosts}
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);