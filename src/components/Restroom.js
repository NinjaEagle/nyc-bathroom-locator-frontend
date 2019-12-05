import React, { Component } from 'react';

class Restroom extends Component {
  state = {
    clicked : false
  };

  handleRestroomClick= () =>{
    this.setState({
      clicked:true
    })
  }
 
  handleMouseEnter = () =>{
    this.props.showInfo(this.props)
  }
  
  handleClick = () => {
    this.props.addFave(this.props.restroom)
  }
    

  render() {
    // const image = this.state.clicked? this.props.restroom.img :null
  
    return (
        <div className="ui card" onMouseEnter={this.handleMouseEnter}>
          <div className="content">
            <div className="header">
              <h4 className="point">
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
    );
  }
}

export default Restroom;