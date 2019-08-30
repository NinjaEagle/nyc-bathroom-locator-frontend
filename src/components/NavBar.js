import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/Nav.scss";
import { connect } from "react-redux";
// import { getCurrentUser, logOut } from "../actions/userActions";

export default class NavBar extends Component {
  

  onLogout = () => {
    this.props.logOut();
    this.props.history.push("/login");
  };

  render() {
    const link = {
      width: "50px",
      padding: "8px",
      margin: "6px 12px 6px",
      background: "purple",
      textDecoration: "none",
      color: "white"
    };

    return (
      <div className="navbar">
        <div className="buttons">
          <span className="title">NYC Restroom Finder</span>
          <NavLink to="/login" style={link}>
            Login
          </NavLink>
          <NavLink to="/" style={link}>
            Home
          </NavLink>

          <NavLink to="/data" style={link}>
            Data
          </NavLink>

          <NavLink to="/profile" style={link}>
            Profile
          </NavLink>
          <NavLink
            className="nav-link"
            style={link}
            onClick={this.onLogout}
            exact
            to="/"
          >
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}
