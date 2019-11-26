import React, { Component, Fragment } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import Review from '../components/Review'
class Profile extends Component {
  state = {
    myReviews: [],
  };
 

  showFavorites = () => {
    return this.props.faveSpots.map(restroom => {
      return (
        <div>
          <li>
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
          </li>
          <br></br>
        </div>
      );
    });
  };

  createReview = newReview => {
    this.setState({
      myReviews: [...this.state.myReviews, newReview]
    });
  };

  render() {
    return (
      <div className="user-info">
        <div className="profile-header">
          <h3 className="faves-heading">My Go To List</h3>
          <div className="my-faves">
            {this.props.username ? `Welcome, ${this.props.username}!` : null}
            <ul className="favorites">
              <h3>{this.showFavorites()}</h3>
            </ul>
          </div>
          <Review
            createReview={this.createReview}
            myReviews={this.state.myReviews}
          />
        </div>
      </div>
    );
  }
}

export default Profile;

// If login is implemented
// componentDidMount() {
  //   fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
  //     method: "GET",
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accepts': 'application/json',
  //         'Authorization': localStorage.token
  //     }
  //   }
  //   )
  //     .then(resp => resp.json())
  //     .then(data => {
  //         console.log(localStorage.clickedUser)
  //         console.log(data)
  //         this.setState({   
  //         user: data,
  //         current_id:data.id
  //     })}
  //     )
  //   if (!localStorage.token) {
  //     this.props.history.push("/login");
  //   }
  // }