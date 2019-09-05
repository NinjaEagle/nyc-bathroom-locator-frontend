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

  render() {
    
    return (
      <div className="welcome">
        <h2>Your account info</h2>
        <h2>Saved Restrooms and Reviews</h2>
        {this.props.username ? `Welcome, ${this.props.username}!` : null}
      </div>
    );
  }
}

export default Profile;
