import React from 'react'

class RestroomFavorites extends React.Component {
	showFavorites = () => {
		return this.props.faveSpots.map((restroom) => {
			const {
				name,
				restroom_type,
				wheelchair_accessible,
				address,
				start_time,
				end_time,
			} = restroom.restroom
			return (
				<div key={restroom.id} className='favorite-item'>
					<h3 className='favoritetitle'>{name}</h3>
					<p>{address}</p>
					<p>Restroom Type: {restroom_type}</p>
					<p>Wheelchair Accesible? {wheelchair_accessible}</p>
					<p>
						Hours: {start_time}-{end_time}
					</p>
					<button
						onClick={(event) => {
							this.props.deleteFave(restroom)
						}}>
						Remove
					</button>
					<br></br>
				</div>
			)
		})
	}

	render() {
		return (
			<div className='favorites'>
				<div className='favorites-list'>{this.showFavorites()}</div>
			</div>
		)
	}
}

export default RestroomFavorites
