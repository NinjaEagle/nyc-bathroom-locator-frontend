import React, { Component, useState } from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import mapStyles from "./mapStyles";

  function Map(props) {

    console.log(props)
    const [selectedSpot,setSelectedSpot] = useState(null);

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 40.700771, lng: -73.987411 }}
        defaultOptions={{ styles: mapStyles}}
      >
        {props.restrooms.map(restroom => (
          <Marker
            key={restroom.id}
            position={{
              lat: restroom.latitude,
              lng: restroom.longitude
            }}
            onClick={() => {
              setSelectedSpot(restroom);
            }}
            icon={{
              url: "/unisex.svg",
              scaledSize: new window.google.maps.Size(25, 25)
            }}
            animation={window.google.maps.Animation.DROP}
          />
        ))}

        {selectedSpot && (
          <InfoWindow
            visible={true}
            position={{
              lat: parseFloat(selectedSpot.latitude),
              lng: parseFloat(selectedSpot.longitude)
            }}
            onCloseClick={() => {
              setSelectedSpot(null);
            }}
          >
            <div>
              <h2>{selectedSpot.name}</h2>
              <p>{selectedSpot.address}</p>
              <p>Type: {selectedSpot.restroom_type}</p>
              <p>Wheelchair Accessible: {selectedSpot.wheelchair_accessible}</p>
              <p>Hours: {selectedSpot.start_time}-{selectedSpot.end_time}</p>
              <p>Save it to your favorites? <button onClick={() => {props.addFave(selectedSpot)}}>Yes!</button></p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
  );
  }


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function HomeMap(props){
  console.log(props) 
  return (
    <div className="map">
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAB5LXzdasiRgK7WSMJXayjA1QffRuzSmc"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        restrooms={props.allRestrooms}
        addFave={props.addFave}
        hovered={props.hovered}
      />
    </div>
  );
}


/* {props.spots.map((spot) => {
            // console.log(props.hovered === spot.name)
            console.log("props", props.hovered);
            // console.log("spot", spot.name);
            return (
             <Marker animation={props.hovered === spot.name ? window.google.maps.Animation.BOUNCE : null} hovered={props.hovered} onHover={props.onHover} key={spot.id} name={spot.name} position={{lat:parseFloat(spot.lat),lng: parseFloat(spot.lng),
            }}
              onClick={() => {
                setSelectedSpot(spot);
              }}

              icon = {{
                url: '/search.png',
                scaledSize: new window.google.maps.Size(25,25)
              }}
            />
          )})} */


  //  {selectedSpot && (
//             <InfoWindow
//             visible={true}
//             position={{lat:parseFloat(selectedSpot.lat),lng: parseFloat(selectedSpot.lng)}}
//             onCloseClick={() => {
//               setSelectedSpot(null);
//             }}
// >
//             <div className="map">
//             <h4 onClick={props.onClick}>{selectedSpot.name}</h4>
//             <h6>{selectedSpot.tag}</h6>
//             <img style={{width: 350, height: 300}} src={selectedSpot.img}/>
//             </div>
//             </InfoWindow>
//           )}




