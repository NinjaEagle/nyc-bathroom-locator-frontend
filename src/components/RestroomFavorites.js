import React from 'react';

class RestroomFavorites extends React.Component {

  showFavorites = () => {
    return this.props.faveSpots.map(restroom => {
      return (
        <div class="favorite-item">
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
          <br></br>
        </div>
      );
    });
  };

  render() {

    return (
      <div className="favorites">
        
        <div className="favorites-list">
          {this.showFavorites()}
        </div>
      </div>
    );
  }
}

export default RestroomFavorites;