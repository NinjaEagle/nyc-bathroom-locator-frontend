import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/Nav.scss";
import { connect } from "react-redux";

// import { getCurrentUser, logOut } from "../actions/userActions";

export default class NavBar extends Component {
  state ={
     
  }

  onLogout = () => {
    localStorage.clear()
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
          <h2 className="title">NYC Restroom Finder</h2>
          {/* <NavLink to="/login" style={link}>
              Login
            </NavLink> */}
          <NavLink to="/home" style={link}>
            Home
          </NavLink>
          
          <NavLink to="/about" style={link}>
            About
          </NavLink>
          {/* <NavLink to="/data" style={link}>
              Data
            </NavLink> */}

          <NavLink to="/profile" style={link}>
            Profile
          </NavLink>
          {/* <NavLink
              className="nav-link"
              style={{ margin: 15 }}
              onClick={this.onLogout}
              exact
              to="/home"
            >
              Logout
            </NavLink> */}
        </div>
      </div>
    );
  }
}
