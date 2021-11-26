import React, { Component } from 'react';
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRest={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: rest => dispatch({type: "ADD_RESTAURANT", text: rest.text}),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
