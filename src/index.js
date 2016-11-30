console.log('hello');

import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
//        const { rating } = this.state;
      var rating = this.state.rating;
      return (                
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={10}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);