import React, { Component } from 'react';
import { connect } from "react-redux";
import Restroom from './Restroom'
class RestroomFavorites extends React.Component {
  
  showFavorites = (props) => {
    console.log(this.props)
    return this.props.likedSpot.map(restroom => {
      return (
        <div>
          <h3>{restroom.name}</h3>
          <h3>Restroom Type: {restroom.restroom_type}</h3>
          <h3>Wheelchair Accesible?:{restroom.wheelchair_accesible}</h3>
        </div>
      );
    }) 
  }

  render() {
    
    return (
      <div className="favorites">
        <h2>Your favorites</h2>
        <ul className="favorites">
        <span></span>
        <h3>{this.showFavorites()}</h3>
        <h2>Add a review:</h2>
        </ul>
      </div>
    )
  }
}

export default RestroomFavorites;