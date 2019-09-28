import React, { Component } from 'react';
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
    myFaves: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/restrooms`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allRestrooms: data
        });
      });
  }

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

  filterSpot = () => {
    let filteredRestrooms = [...this.state.allRestrooms];
    // Filtering the spots according to type
    if (this.state.sortTerm === "All") {
      filteredRestrooms = [...this.state.allRestrooms];
    } else if (this.state.sortTerm === "public") {
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
    }  else if (this.state.sortTerm === "department store") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    }
      else if (this.state.sortTerm === "other") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.sortTerm === "Yes") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.wheelchair_accessible === this.state.sortTerm
      );
    };
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
        {/* <h2 className="slogan">A piece of mind from a click away</h2> */}
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
              myFaves={this.props.myFaves}
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