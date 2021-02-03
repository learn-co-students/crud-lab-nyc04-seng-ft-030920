import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map(review => {
          return <Review key={review.id} review={review} delete={this.props.delete}/>
        })}
      </ul>
    );
  }
};

export default Reviews;