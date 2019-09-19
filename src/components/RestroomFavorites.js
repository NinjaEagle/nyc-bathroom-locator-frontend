import React, { Component } from 'react';
import { connect } from "react-redux";
class RestroomFavorites extends React.Component {
  state = {
    myFaves: []
  };

  showFavorites = () => {
    return this.props.faveSpots.map(restroom => {
      return (
        <div>
          <li>
            <h4 className="favorite-title">{restroom.restroom.name}</h4>
            <p>{restroom.restroom.address}</p>
            <p>Restroom Type: {restroom.restroom.restroom_type}</p>
            <p>
              Wheelchair Accesible? {restroom.restroom.wheelchair_accessible}
            </p>
            <p>
              Hours: {restroom.restroom.start_time}-{restroom.restroom.end_time}
            </p>
            <button
              onClick={event => {
                this.props.deleteFave(restroom);
              }}
            >
              Delete this!
            </button>
          </li>
          <br></br>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.faveSpots)
    return (
      <div className="favorites">
        <h2 className="favorite-title">My Favorited Restrooms</h2>
        <ul className="favorites-list">{this.showFavorites()}</ul>
      </div>
    );
  }
}

export default RestroomFavorites;