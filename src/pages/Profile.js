import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Profile extends Component {
  state= {
    username:''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/${localStorage.user_id}/${localStorage.clickedUser}`, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json',
          'Authorization': localStorage.token
      }
    }
    )
      .then(resp => resp.json())
      .then(data => {
          console.log(localStorage.clickedUser)
          console.log(data)
          this.setState({   
          user: data,
          current_id:data.id
      })}
      )
    // if (!localStorage.token) {
    //   this.props.history.push("/login");
    // }
  }
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
      <div className="welcome">
        <h2>Saved Restrooms and Notes</h2>
        {this.props.username ? `Welcome, ${this.props.username}!` : null}
        <ul className="favorites">
          <span></span>
          <h3>{this.showFavorites()}</h3>
          <h2>Add a review:</h2>
        </ul>
      </div>
    );
  }
}

export default Profile;
