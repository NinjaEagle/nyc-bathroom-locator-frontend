import React, { Component } from 'react';
import { connect } from "react-redux";

class Restroom extends Component {

    state ={
        show:false
    }

    render() {
        return (
            <div>
            
            </div>
        );
    }
}

export default connect(mapStateToProps)(Restroom);