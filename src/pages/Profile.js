import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="welcome">
        {this.props.username ? `Welcome, ${this.props.username}!` : null}
      </div>
    );
  }
}

export default Profile;
