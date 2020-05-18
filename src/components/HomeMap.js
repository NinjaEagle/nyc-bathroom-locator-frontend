import React, { useState } from 'react'
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps'
import mapStyles from './mapStyles'

function Map(props) {
	const [selectedSpot, setSelectedSpot] = useState(null)
	return (
		<GoogleMap
			defaultZoom={13.5}
			defaultCenter={{ lat: props.coordinates.lat, lng: props.coordinates.lng }}
			defaultOptions={{ styles: mapStyles }}>
			{' '}
			{props.restrooms.map((restroom) => (
				<Marker
					key={restroom.id}
					position={{
						lat: restroom.latitude,
						lng: restroom.longitude,
					}}
					onClick={() => {
						setSelectedSpot(restroom)
					}}
					icon={{
						url: '/unisex.svg',
						scaledSize: new window.google.maps.Size(25, 25),
					}}
					animation={window.google.maps.Animation.DROP}
				/>
			))}
			{selectedSpot && (
				<InfoWindow
					visible={true}
					position={{
						lat: parseFloat(selectedSpot.latitude),
						lng: parseFloat(selectedSpot.longitude),
					}}
					onCloseClick={() => {
						setSelectedSpot(null)
					}}>
					<div>
						<h2> {selectedSpot.name} </h2> <p> {selectedSpot.address} </p>{' '}
						<p> Type: {selectedSpot.restroom_type} </p>{' '}
						<p> Wheelchair Accessible: {selectedSpot.wheelchair_accessible} </p>{' '}
						<p>
							Hours: {selectedSpot.start_time} - {selectedSpot.end_time}{' '}
						</p>{' '}
						<p>
							Save it to your selected list ?{' '}
							<button
								onClick={() => {
									props.addFave(selectedSpot)
								}}>
								Yes!
							</button>{' '}
						</p>{' '}
					</div>{' '}
				</InfoWindow>
			)}{' '}
		</GoogleMap>
	)
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function HomeMap(props) {
	return (
		<div className='map'>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				restrooms={props.allRestrooms}
				selectedMarker={props.selectedMarker}
				addFave={props.addFave}
				hovered={props.hovered}
				coordinates={props.coordinates}
			/>{' '}
		</div>
	)
}
