import React, { Component} from "react";
import {InfoWindow, Marker, Map, GoogleApiWrapper} from "google-map-react";
// import Marker from '../components/Marker';
// import RestroomsContainer from '../containers/RestroomsContainer';
export class MapContainer extends React.Component {
  state = {
    user: "",
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    clicked: false
  };

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/profile", {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(userInfo => {
          this.setState({ user: userInfo.data });
        });
    }
  }

  getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }]
        }
      ]
    };
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

//   handleRestroomClick = e => {};

  render() {
    let coo;
    if (this.props.allRestrooms && this.props.coordinates) {
      coo = {
        lat: 40.700862,
        lng: -73.987472
      };
    }

    let allCoordinates = this.props.allRestrooms.map(restroom => {
      console.log(restroom);
      let colorMarker = "";
      if (restroom.restroom_type == "park") {
        colorMarker = "green";
      }
      if (restroom.restroom_type == "hotel") {
        colorMarker = "purple";
      }
      if (restroom.restroom_type == "coffee shop") {
        colorMarker = "brown";
      } else {
        colorMarker = "blue";
      }
      return (
        <Marker
          onClick={this.onMarkerClick}
          key={restroom.id}
          lat={restroom.latitude}
          lng={restroom.longitude}
          text={`📍${restroom.name}`}
          restroom_type={restroom.restroom_type}
          history={this.props.history}
          color={colorMarker}
        />
      );
    });

    return (
      // Important! Always set the container height explicitly
      <div className="home-map" style={{ height: "70vh", width: "80vw" }}>
        
          <Map
            // bootstrapURLKeys={{
            //   key: "AIzaSyBbPZk-23gI_qR3vn7ld7_RjxzSkV0Nktc"
            // }}
            initialCenter={this.props.coordinates}
            zoom={12.5}
            options={this.getMapOptions}
          >
            {allCoordinates}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbPZk-23gI_qR3vn7ld7_RjxzSkV0Nktc'
})(MapContainer);