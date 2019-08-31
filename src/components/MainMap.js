import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text, restroom_id, history }) => (
  <div
    onClick={e => {
      localStorage.restroom_id = restroom_id;
      history.push("/show");
    }}
  >
    {text}
  </div>
);

class MainMap extends Component {
  render() {
    let coo;
    if (this.props.allRestrooms && this.props.coordinates) {
      console.log(localStorage.xcoo);
      console.log(localStorage.ycoo);
      coo = {
        lat: 40.700862,
        lng: -73.987472
      };
    }
    let allCoordinates = this.props.allRestrooms.map((restroom) => {
        console.log(restroom)
    //   return (
    //     <Marker
    //       lat={restroom.coordinates.latitude}
    //       lng={restroom.coordinates.longitude}
    //       text={`📍${restroom.name}`}
    //       restroom_id={restroom.id}
    //       history={this.props.history}
    //     />
    //   );
    });

    return (
      // Important! Always set the container height explicitly
      <div className="home-map" style={{ height: "70vh", width: "80vw" }}>
        {coo ? (
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={this.props.coordinates}
            defaultZoom={17.2}
          >
            {allCoordinates}
          </GoogleMapReact>
        ) : null}
      </div>
    );
  }
}

export default MainMap;
