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
            <span>{restroom.restroom.address}</span>
            <h5>Restroom Type: {restroom.restroom.restroom_type}</h5>
            <h5>
              Wheelchair Accesible? {restroom.restroom.wheelchair_accessible}
            </h5>
            <h5>
              Hours: {restroom.restroom.start_time}-{restroom.restroom.end_time}
            </h5>
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
    return (
      <div className="favorites">
        <h2 className="favorite-title">Selected Restrooms</h2>
        <ul className="favorites-list">{this.showFavorites()}</ul>
      </div>
    );
  }
}

export default RestroomFavorites;