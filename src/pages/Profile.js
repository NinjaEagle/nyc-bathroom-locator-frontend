import React, { Component } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import Review from '../components/Review'
class Profile extends Component {
 

  showFavorites = () => {
    return this.props.faveSpots.map(restroom => {
      return (
        <div class="go-to-item" key={restroom.id}>
            <h3 className="favoritetitle">{restroom.restroom.name}</h3>
            <p>{restroom.restroom.address}</p>
            <p>Restroom Type: {restroom.restroom.restroom_type}</p>
            <p>
              Wheelchair Accessible? {restroom.restroom.wheelchair_accessible}
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
      <div className="user-info">
        <div className="profile-header">
          <h3 className="faves-heading">My Go To List</h3>
          <div className="my-faves">
            <div className="favorites">
              <h3>{this.showFavorites()}</h3>
            </div>
          </div>
          <Review
            deleteReview={this.props.deleteReview}
            createReview={this.props.createReview}
            myReviews={this.props.myReviews}
          />
        </div>
      </div>
    );
  }
}

export default Profile;