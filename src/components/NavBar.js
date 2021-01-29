import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Nav.scss";

export default class NavBar extends Component {
	state = {
		btnClick: "unclicked",
	};

	navAnimate = (e) => {
		this.setState({
			btnClick: "clicked",
		});
	};

	render() {
		let link = {
			width: "50px",
			padding: "6px",
			margin: "6px 12px 6px",
			background: "antiquewhite",
			border: "1px groove black",
			color: "black",
			text: "center",
		};
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
		if (this.props.context.isSignedIn === "true") {
			return (
				<div className='navbar'>
					<h2 className='title'>NYC Restroom Finder </h2>
					<div className='buttons'>
						<Link to='/' style={link}>
							Home
						</Link>
						<Link to='/about' style={link}>
							About
						</Link>
						<Link to='/profile' style={link}>
							Profile
						</Link>
						<Link to='/signout' style={link} state={"Signout"}>
							Signout
						</Link>
					</div>
				</div>
			);
		} else {
			return (
				<div className='navbar'>
					<h2 className='title'>NYC Restroom Finder </h2>
					<div className='buttons'>
						<Link to='/' style={link}>
							Home
						</Link>
						<Link to='/about' style={link} state={"About"}>
							About
						</Link>
						<div className='tabContainerBox'>
							<Link to='/Login' style={link} state={"Login"}>
								Login
							</Link>
							<Link to='/Signup' style={link} state={"Signup"}>
								Signup
							</Link>
						</div>
					</div>
				</div>
			);
		}
	}
}
// return (
//   <div className="navbar">
//       <h2 className="title">NYC Restroom Finder </h2>
//     <div className="buttons">
//       <NavLink to="/" style={link}>
//         Home
//       </NavLink>
//       <NavLink to="/about" style={link}>
//         About
//       </NavLink>
//       <NavLink to="/profile" style={link} >
//         Profile
//       </NavLink>
//     </div>
//   </div>
// );
