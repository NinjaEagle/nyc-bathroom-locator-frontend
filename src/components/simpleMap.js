import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const AnyReactComponent = ({ text }) => <div onClick={ (e) => console.log(e.target)} >{text}</div>;

class simpleMap extends React.Component { 
  static defaultProps ={
    center: {
      lat: 40.700771,
      lng: - 73.987411
    },
    zoom: 18
  }
  // const getMapOptions = (maps: any) => {
  //   return {
  //     disableDefaultUI: true,
  //     mapTypeControl: true,
  //     streetViewControl: true,
  //     styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  //   };
  // };

  render(){
    let coordinates 
      if(this.props.coordinates){
        coordinates = {
          lat:this.props.coordinates.latitude,
          lng:this.props.coordinates.longitude
        }
      }

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        {coordinates?
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAvAtG2SuXIyUTJkabU2P0Y2AUQ1pW4WSE" }}
            defaultCenter={coordinates}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={coordinates.lat + 0.1}
              lng={coordinates.lng + 0.1}
              text="📍"
            />
          </GoogleMapReact>
          :null}
      </div>
    );
  }
}

export default simpleMap;
