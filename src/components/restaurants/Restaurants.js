import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {return <Restaurant key={restaurant.id} delete={this.props.delete} restaurant={restaurant}/>})}
      </ul>
    );
  }
};

export default Restaurants;