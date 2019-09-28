import React, { Component } from 'react';

class RestroomFavorites extends React.Component {

  showFavorites = () => {
    return this.props.faveSpots.map(restroom => {
      return (
        <div>
          <li>
            <h3 className="favoritetitle">{restroom.restroom.name}</h3>
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
              Remove
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
        <h2 className="favorites-title">My Selected Restrooms</h2>
        <ul className="favorites-list">{this.showFavorites()}</ul>
      </div>
    );
  }
}

export default RestroomFavorites;