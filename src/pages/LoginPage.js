import React, { Component } from "react";
import "../App.css";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state );

    fetch(`http://localhost:3000/login`, {
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
          this.props.history.push('/profile');
        }
      });
  };

  handleClick = () => {
    this.props.history.push("/signup")
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label id="label">Login</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
          <a
            className="signup login"
            href="./signup"
            onClick={this.handleClick}
          >
            New Here?
          </a>
        </form>
      </div>
    );
  }
}
export default LoginPage;
