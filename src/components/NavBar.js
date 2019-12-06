import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/Nav.scss";
export default class NavBar extends Component {
  state= {
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
      padding: "6px",
      margin: "6px 12px 6px",
      background: "antiquewhite",
      border: "1px groove black",
      color: "black",
      text: "center"
    }
    // if(this.state.btnClick === 'clicked'){
    //   link = {
    //     width: "50px",
    //     padding: "8px",
    //     margin: "6px 12px 6px",
    //     background: "antiquewhite",
    //     border: "1px groove black",
    //     color: "black"
    //   }
    // }
    return (
      <div className="navbar">
        <div className="buttons">
          <h2 className="title">NYC Restroom Finder</h2>
          <NavLink to="/" style={link}>
            Home
          </NavLink>
          <NavLink to="/about" style={link}>
            About
          </NavLink>
          <NavLink to="/profile" style={link} >
            Profile
          </NavLink>
        </div>
      </div>
    );
  }
}
