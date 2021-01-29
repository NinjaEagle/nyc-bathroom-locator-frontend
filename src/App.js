import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Signout from "./pages/Signout";
import "./App.css";
import { MyProvider, AppContext } from "./api/context.js";

class App extends React.Component {
	state = {
		xcoordinate: 40.700771,
		ycoordinate: -73.987411,
		name: "",
		faveSpots: [],
		myReviews: [],
		allRestrooms: [],
	};

	componentDidMount() {
		// fetch(`http://localhost:3000/restrooms`)
		fetch("https://nyc-restrooms-locator-backend.herokuapp.com/restrooms")
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({
					allRestrooms: data,
				});
			});
	}
	redirect = (page) => {
		this.setState({ page: page });
	};

	addFave = (spot) => {
		let copiedSpots = this.state.faveSpots;
		if (!copiedSpots.filter((e) => e.restroom.id === spot.id).length > 0) {
			fetch("https://nyc-restrooms-locator-backend.herokuapp.com/favorites", {
				method: "POST",
				headers: {
					Accepts: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user_id: 1,
					restroom_id: spot.id,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					this.setState({
						faveSpots: [...this.state.faveSpots, data],
					});
				});
		}
	};

	deleteFave = (favorite) => {
		// fetch(`http://localhost:3000/favorites/${favorite.id}`, {
		fetch(`https://nyc-restrooms-locator-backend.herokuapp.com/${favorite.id}`, {
			method: "DELETE",
		}).then(() => {
			const updatedSpots = this.state.faveSpots.filter((aSpot) => {
				return aSpot.id !== favorite.id;
			});
			this.setState({
				faveSpots: updatedSpots,
			});
		});
	};

	createReview = (newReview) => {
		let restroomList = this.state.allRestrooms;
		let theRestroom = restroomList.filter((spot) => spot.name === newReview.name);
		let restroomId = theRestroom[0].id;

		if (!this.state.myReviews.includes(newReview)) {
			fetch("https://nyc-restrooms-locator-backend.herokuapp.com/reviews", {
				method: "POST",
				headers: {
					Accepts: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					user_id: 1,
					restroom_id: restroomId,
					restroom_name: newReview.name,
					text: newReview.review,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					this.setState({
						myReviews: [...this.state.myReviews, data],
					});
				});
		}
	};

	deleteReview = (review) => {
		fetch(`https://nyc-restrooms-locator-backend.herokuapp.com/${review.id}`, {
			method: "DELETE",
		}).then(() => {
			const updatedReviews = this.state.myReviews.filter((aReview) => {
				return aReview.id !== review.id;
			});
			this.setState({
				myReviews: updatedReviews,
			});
		});
	};

	render() {
		let faveSpots = this.state.faveSpots;
		let myReviews = this.state.myReviews;
		return (
			<div className='app'>
				<MyProvider>
					<AppContext.Consumer>
						{(context) => {
							return (
								<React.Fragment>
									<NavBar {...context} />
									<Route
										exact
										path='/'
										render={(routerProps) => (
											<Home
												faveSpots={faveSpots}
												deleteFave={this.deleteFave}
												addFave={this.addFave}
												allRestrooms={this.state.allRestrooms}
											/>
										)}
									/>
									<Route exact path='/about' render={(routerProps) => <About />} />
									<Route
										exact
										path='/profile'
										render={(routerProps) => (
											<Profile
												{...routerProps}
												faveSpots={faveSpots}
												addFave={this.addFave}
												deleteFave={this.deleteFave}
												myReviews={myReviews}
												createReview={this.createReview}
												deleteReview={this.deleteReview}
											/>
										)}
									/>
									<Route
										path='/Signup'
										exact
										render={(props) => <Signup {...props} {...context} />}
									/>
									<Route
										path='/Login'
										exact
										render={(props) => <Login {...props} {...context} />}
									/>
									<Route
										path='/Signout'
										exact
										render={(props) => <Signout {...props} {...context} />}
									/>
								</React.Fragment>
							);
						}}
					</AppContext.Consumer>
				</MyProvider>
			</div>
		);
	}
}

export default App;
