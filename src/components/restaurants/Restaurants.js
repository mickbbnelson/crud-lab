import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  renderRestaurants = this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)
  
  render() {
    debugger
    return(
      <ul>
        {this.renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;