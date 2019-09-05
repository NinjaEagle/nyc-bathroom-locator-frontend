import React, { Component } from 'react';
import Marker from "./Marker";


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
    this.props.onHover(this.props.spot)
  }
  mapClick=() =>{
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
    console.log("i did it")

    alert("Yay you now can view your new saved Restroom on your profile!")
  }
    

  render() {
    const image = this.state.clicked? this.props.restroom.img :null
   
    console.log(this.props)
    return( 
        <div className="restrooms-style">
          <h6 className = "point" onMouseMove={this.onMouseMove}>{this.props.restroom.name}</h6>
          <span onClick={this.handleClick}>Yoooo </span>
          <h6> {this.props.restroom_type} </h6>
        </div>
    )
  }
}

export default Restroom;

