import React, { Component } from 'react';
// import MapContainer from '../containers/MapContainer';
import HomeMap from '../components/HomeMap';
import RestroomFavorites from '../components/RestroomFavorites';
import Restroom from '../components/Restroom';
import Filter from '../components/Filter';
class Home extends Component {
  state = {
    xcoordinate: 40.700771,
    ycoordinate: -73.987411,
    allRestrooms: [],
    filterTerm: "",
    hovered: null,
    sortTerm: "All",
    selectedMarker: "",
    favoriteSpot: [],
    userAddress:'',
    currentProfile: null,
  };

  getAddress() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
        this.state.currentProfile.user_location
          ? this.state.currentProfile.user_location.latitude
          : this.state.xcoordinate
      },${
        this.state.currentProfile.user_location
          ? this.state.currentProfile.user_location.longitude
          : this.state.ycoordinate
      }&key='AIzaSyAB5LXzdasiRgK7WSMJXayjA1QffRuzSmc'`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          userAddress: data.results[0].formatted_address
        })
      );
  }

  componentDidMount() {
    fetch(`http://localhost:3000/restrooms`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allRestrooms: data
        });
      });
  }
  // setFilterTerm = term => {
  //   this.setState({
  //     filterTerm: term
  //   });
  // };
  setSortTerm = term => {
    this.setState({
      sortTerm: term
    });
  };
  showInfo = selectedMarker => {
    this.setState({ selectedMarker: selectedMarker });
    console.log(this.state.selectedMarker);
  };

  handleHover = restroom => {
    console.log(restroom);
    this.setState({
      hovered: restroom.name
    });
  };

  // addFave = spot => {
  //   this.setState(prevState => {
  //     return {
  //       favoriteSpot: [spot, ...prevState.favoriteSpot]
  //     };
  //   });
  // };

  filterSpot = () => {
    let filteredRestrooms = [...this.state.allRestrooms];
    // Filtering the spots according to type
    if (this.state.sortTerm === "All") {
      filteredRestrooms = [...this.state.allRestrooms];
    }
    else if (this.state.sortTerm === "public") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.sortTerm === "coffee shop") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.sortTerm === "hotel") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.sortTerm === "book store") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.sortTerm === "fast food") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    }
      else {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === "other"
      );
    };
    console.log(filteredRestrooms);
    return filteredRestrooms.map(restroom => {
      return (
        <Restroom
          key={restroom.id}
          showInfo={this.showInfo}
          restroom={restroom}
          onHover={this.handleHover}
          addFave={this.props.addFave}
        />
      );
    });
  };

  render() {
    console.log(this.state.sortTerm);
    return (
      <div className="home">
        <h2>Are you looking for a nice restroom nearby?</h2>
        <br></br>
        <div className="home-map">
          <HomeMap
            coordinates={{
              lat: this.state.xcoordinate,
              lng: this.state.ycoordinate
            }}
            allRestrooms={this.state.allRestrooms}
            selectedMarker={this.state.selectedMarker}
            onHover={this.handleHover}
            hovered={this.state.hovered}
            addFave={this.props.addFave}
            userAddress={this.state.userAddress}
          />

          <div className="restroom-faves">
            <RestroomFavorites
              onHover={this.handleHover}
              faveSpots={this.props.faveSpots}
              deleteFave={this.props.deleteFave}
              addFave={this.props.addFave}
            />
          </div>
        </div>
        <div className="result-container">
          <div className="filter">
            <Filter
              setFilterTerm={this.setFilterTerm}
              sortTerm={this.state.sortTerm}
              term={this.state.filterTerm}
              setSortTerm={this.setSortTerm}
            />
          </div>
          <div className="restroomlist">
            <div class="ui four column grid">
              <div class="row">{this.filterSpot()}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;