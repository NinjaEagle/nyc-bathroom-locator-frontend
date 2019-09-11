import React, { Component } from 'react';
import { connect } from "react-redux";
class RestroomFavorites extends React.Component {
  
  showFavorites = () => {
    console.log(this.props)
    return this.props.faveSpots.map(restroom => {
      return (
        <div>
          <li>
          <h4>{restroom.restroom.name}</h4>
          <p>{restroom.restroom.address}</p>
          <p>Restroom Type: {restroom.restroom.restroom_type}</p>
          <p>Wheelchair Accesible? {restroom.restroom.wheelchair_accessible}</p>
          <p>Hours: {restroom.restroom.start_time}-{restroom.restroom.end_time}</p>
          <button onClick={(event)=>{this.props.deleteFave(restroom)}}>Delete me</button>
          </li><br></br>
        </div>  
      );
    }) 
  }

  render() {
    
    return (
      <div className="favorites">
        <h2 className="favorite-title">Your favorites</h2>
        <ul className="favorites-list">
        {this.showFavorites()}
        </ul>
      </div>
    )
  }
}

export default RestroomFavorites;