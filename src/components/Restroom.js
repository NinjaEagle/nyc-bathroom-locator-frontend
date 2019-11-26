import React, { Component } from 'react';
import {Card, Button} from 'semantic-ui-react';


class Restroom extends Component {
  state = {
    clicked : false
  };

  handleRestroomClick=()=>{
    this.setState({
      clicked:true
    })
  }
  onMouseMove = (event) => {
    console.log(this.props)
    this.props.onHover(this.props.restroom)
  }
  mapClick= () =>{
    this.props.showInfo(this.props)
  }
  
  handleClick = ( ) => {
    console.log(this.props)
    this.props.addFave(this.props.restroom)
    // alert("Yay you now can view your new saved Restroom on your profile!")
  }
    

  render() {
    const image = this.state.clicked? this.props.restroom.img :null
  
    return (
      <div>
        <div className="ui card">
          <div className="content">
            <div className="header">
              <h4 className="point" onMouseMove={this.onMouseMove}>
                {this.props.restroom.name}
              </h4>
            </div>
            <div className="meta"></div>
            <div className="description">
              <p>Address: {this.props.restroom.address}</p>
              <p>Type: {this.props.restroom.restroom_type}</p>
              <p>
                Wheelchair Accessible?{" "}
                {this.props.restroom.wheelchair_accessible}
              </p>
              <p>Hours: {this.props.restroom.start_time} to {this.props.restroom.end_time}</p>
            </div>
            <button
              className="ui vertical animated button"
              onClick={this.handleClick}
            >
              <div className="hidden content">Add</div>
              <div className="visible content">
                <i aria-hidden="true" className="favorite icon"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Restroom;

{/* <div className="restrooms-style">
  <h4 className="point" onMouseMove={this.onMouseMove}>
    {this.props.restroom.name}
  </h4>
  <button onClick={this.handleClick}>Add this! </button>
  <h5> Type: {this.props.restroom.restroom_type} </h5>
  <h5> Wheelchair Accessible? {this.props.restroom.wheelchair_accesible}</h5>
  <br></br>
</div>; */}