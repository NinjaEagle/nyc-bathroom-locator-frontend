import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/Nav.scss";
export default class NavBar extends Component {
  state = {
    btnClick: 'unclicked'
  }

  navAnimate = (e) => {
    console.log(e.target)
    this.setState({
      btnClick: 'clicked'
    })
  }

  render() {
    let link = {
      width: "50px",
      padding: "8px",
      margin: "6px 12px 6px",
      background: "antiquewhite",
      color: "black"
    };
    if(this.state.btnClick === 'clicked'){
      link = {
        width: "50px",
        padding: "8px",
        margin: "6px 12px 6px",
        background: "antiquewhite",
        border: "1px groove black",
        color: "black"
      }
    }
    console.log(this.state)
    return (
      <div className="navbar">
        <div className="buttons">
          <h2 className="title">NYC Restroom Finder</h2>
          <NavLink to="/" style={link} onClick={this.navAnimate}>
            Home
          </NavLink>
          <NavLink to="/about" style={link} onClick={this.navAnimate}>
            About
          </NavLink>
          <NavLink to="/profile" style={link} onClick={this.navAnimate}>
            Profile
          </NavLink>
        </div>
      </div>
    );
  }
}
