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
    sortTerm: "",
    selectedMarker: ""
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
  setFilterTerm = term => {
    this.setState({
      filterTerm: term
    });
  };
  setSortTerm = term => {
    this.setState({
      sortTerm: term
    });
  };
  showInfo = (selectedMarker) =>{
    this.setState({selectedMarker: selectedMarker});
    console.log(this.state.selectedMarker)
  }
  handleHover = restaurant => {
    this.setState({
      hovered: restaurant.name
    });
  };

  filterSpot = () => {
    let filteredRestrooms = [...this.state.allRestrooms];
    // Filtering the spots according to type
    if (this.state.filterTerm === "All") {
      filteredRestrooms = [...this.state.allRestrooms];
    }
    // else{
    //   filteredRestrooms = filteredRestrooms.filter(restroom => restroom.restroom_type ===this.state.filterTerm)
    // }
    if (this.state.filterTerm === "public") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.filterTerm === "coffee shop") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.filterTerm === "hotel") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.filterTerm === "park") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    } else if (this.state.filterTerm === "fast food") {
      filteredRestrooms = filteredRestrooms.filter(
        restroom => restroom.restroom_type === this.state.sortTerm
      );
    }
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
    console.log(this.state.allRestrooms);
    return (
      <div>
        <h2>Are you looking for a nice restroom nearby?</h2>
        <br></br>
        <div className="home-map">
          <Filter
            setFilterTerm={this.setFilterTerm}
            sortTerm={this.state.sortTerm}
            term={this.state.filterTerm}
            setSortTerm={this.setSortTerm}
          />
          <HomeMap
            coordinates={{
              lat: this.state.xcoordinate,
              lng: this.state.ycoordinate
            }}
            allRestrooms={this.state.allRestrooms}
          />
        </div>
        <div className="flex-container">
          {this.filterSpot()}
        </div>
        <div className="restroom-faves">
          <RestroomFavorites />
        </div>
      </div>
    );
  }
}

export default Home;