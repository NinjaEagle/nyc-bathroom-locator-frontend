import React, { Component } from "react";
import HomeMap from "../components/HomeMap";
import RestroomFavorites from "../components/RestroomFavorites";
import Restroom from "../components/Restroom";
import Filter from "../components/Filter";

class Home extends Component {
	state = {
		xcoordinate: 40.700771,
		ycoordinate: -73.987411,
		allRestrooms: [],
		filterTerm: "",
		sortTerm: "All",
		selectedMarker: "",
		favoriteSpot: [],
		userAddress: "",
		currentProfile: null,
		myFaves: [],
	};

	componentDidMount() {
		this.getGeoLocation();
		this.getRestrooms();
	}

	getRestrooms = () => {
		// fetch(`http://localhost:3000/restrooms`)
		fetch("https://nyc-restrooms-locator-backend.herokuapp.com/restrooms")
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({
					allRestrooms: data,
				});
			});
	};

	getGeoLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				localStorage.xcoo = position.coords.latitude;
				localStorage.ycoo = position.coords.longitude;
				this.setState(
					(prevState) => ({
						xcoordinate: position.coords.latitude,
						ycoordinate: position.coords.longitude,
					}),
					this.getRestrooms
				);
			});
		} else {
			alert("Cannot get your location from your browser. Using default coordinates.");
		}
	};

	setSortTerm = (term) => {
		this.setState({
			sortTerm: term,
		});
	};

	showInfo = (selectedMarker) => {
		this.setState({ selectedMarker: selectedMarker });
	};

	handleHover = (restroom) => {
		this.setState({
			hovered: restroom.name,
		});
	};

	filterSpot() {
		const filteredRestrooms = [...this.state.allRestrooms];
		let filteredList = [];
		// Filtering the spots according to type
		if (this.state.sortTerm === "All") filteredList = filteredRestrooms;
		else if (this.state.sortTerm === "Yes") {
			filteredList = filteredRestrooms.filter(
				(restroom) => restroom.wheelchair_accessible === this.state.sortTerm
			);
		} else {
			filteredList = filteredRestrooms.filter(
				(restroom) => restroom.restroom_type === this.state.sortTerm
			);
		}
		return filteredList.map((restroom) => {
			return (
				<Restroom
					key={restroom.id}
					showInfo={this.showInfo}
					restroom={restroom}
					addFave={this.props.addFave}
				/>
			);
		});
	}

	filteredMarkers = () => {
		const filteredRestrooms = [...this.state.allRestrooms];
		let filteredList = [];
		// Filtering the spots according to type
		if (this.state.sortTerm === "All") filteredList = filteredRestrooms;
		else if (this.state.sortTerm === "Yes") {
			filteredList = filteredRestrooms.filter(
				(restroom) => restroom.wheelchair_accessible === this.state.sortTerm
			);
		} else {
			filteredList = filteredRestrooms.filter(
				(restroom) => restroom.restroom_type === this.state.sortTerm
			);
		}
		return filteredList;
	};

	render() {
		return (
			<div className='home'>
				{/* <h2 className="slogan">A piece of mind from a click away</h2> */}
				<br></br>
				<div className='home-map'>
					<HomeMap
						coordinates={{
							lat: this.state.xcoordinate,
							lng: this.state.ycoordinate,
						}}
						allRestrooms={this.filteredMarkers()}
						selectedMarker={this.state.selectedMarker}
						onHover={this.handleHover}
						hovered={this.state.hovered}
						addFave={this.props.addFave}
						userAddress={this.state.userAddress}
					/>
					<div className='selected-restrooms'>
						<h2 className='favorites-title'>My Selected Restrooms</h2>
						<div className='restroom-faves'>
							<RestroomFavorites
								onHover={this.handleHover}
								faveSpots={this.props.faveSpots}
								deleteFave={this.props.deleteFave}
								myFaves={this.props.myFaves}
							/>
						</div>
					</div>
				</div>
				<div className='result-container'>
					<div className='filter'>
						<Filter
							setFilterTerm={this.setFilterTerm}
							sortTerm={this.state.sortTerm}
							term={this.state.filterTerm}
							setSortTerm={this.setSortTerm}
						/>
					</div>
					<div className='restroomlist'>
						<div className='ui four column grid'>
							<div className='row'>{this.filterSpot()}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
