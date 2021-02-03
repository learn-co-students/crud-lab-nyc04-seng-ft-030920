import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput add={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews delete={this.props.deleteReview} reviews={this.props.reviews} restaurantId={this.props.restaurantId}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.reviews
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({type: 'ADD_REVIEW', review}),
    deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
