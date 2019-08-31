import React, { Component } from 'react';
import SimpleMap from '../components/SimpleMap';
import MainMap from '../components/MainMap'
class Home extends Component {
  state = {
    xcoordinate: 40.700771,
    ycoordinate: -73.987411,
    allRestrooms: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/restrooms`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allRestrooms: data
        });
      })
  }

  render() {
    console.log(this.state.allRestrooms);

    return (
    <div>
        <h1>Are you looking for nice restroom?</h1><br></br>
        <div className="home-map">
            <MainMap coordinates={{lat:this.state.xcoordinate, lng:this.state.ycoordinate}} allRestrooms={this.state.allRestrooms}/>
        </div>
    </div>
    )
  }
}

export default Home;