import React, { Component } from "react";
import { connect } from "react-redux";
import {userPostFetch } from "../actions/userActions";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.token = data.token;
          this.props.updateUsername(data.user.username);
          this.props.history.push("/profile");
        }
      });
  };

  render() {
    console.log(this.state)
    return (
      <div className="form-container signup">
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <input className="form-btn signup" type="submit" value="Enter" />
        </form>
        <a
          className="anch signup"
          href="./login"
          onClick={this.handleClick}
        >
          Been Here Before?
        </a>
      </div>
    );
  }
}

export default Signup;
// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(Signup);
