import React, { Component } from 'react';
import Marker from "./Marker";
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
  // handleMarkerOnClick = restroomInfo => {
  //   fetch(`http://localhost:3000/restrooms/${restroomInfo.id}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data);
  //       // let dishes = [];
  //       // restrooms.data.national_dishes.map(dish => dishes.push(dish));
  //       this.setState({
  //         restroomInfo: data
  //       });
  //     });
  //   }
  
  handleClick = ( ) => {
    console.log(this.props)
    this.props.addFave(this.props.restroom)
    alert("Yay you now can view your new saved Restroom on your profile!")
  }
    

  render() {
    const image = this.state.clicked? this.props.restroom.img :null
  
    return (
      <div>
        <div class="ui card">
          <div class="content">
            <div class="header">
              <h4 className="point" onMouseMove={this.onMouseMove}>
                {this.props.restroom.name}
              </h4>
            </div>
            <div class="meta"></div>
            <div class="description">
              Type: {this.props.restroom.restroom_type}
              <br></br>
              Wheelchair Accessible? {this.props.restroom.wheelchair_accesible}
            </div>
            <button
              class="ui vertical animated button"
              onClick={this.handleClick}
            >
              <div class="hidden content">Add</div>
              <div class="visible content">
                <i aria-hidden="true" class="favorite icon"></i>
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