import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pages from './pages';
// import {GoogleMap} from 'react-google-maps';
import SimpleMap from './components/SimpleMap';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
// styling
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends React.Component {
  state = {
    xcoordinate: 40.700771,
    ycoordinate: -73.987411,
    allRestrooms: [],
    page: 'login',
    name: '',
    likedSpot: []
  };

  redirect = (page) => {
    this.setState({page: page})
  }

  componentDidMount() {
    if (localStorage.token){
    fetch(`http://localhost:3000/profile`,
    {headers: {
      Authorization: localStorage.token
    }})
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          name: data.name
        });
      });
    }
  }
    addFave = (spot) => {
      console.log(spot)
      if (!this.state.likedSpot.includes(spot)) {
        fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 1
      })
    })
    .then(res => res.json())
    .then(data =>{
        this.setState({
          likedSpot:[...this.state.likedSpot, spot]
      })
    })
    }
  }



  render() {
    console.log(this.state.likedSpot)
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/home"
            render={routerProps => (
              <Home likedSpot={this.state.likedSpot} addFave={this.addFave} />
            )}
          />
          {/* <Route exact path="/login" component={Pages.Login} />
          <Route exact path="/signup" component={Pages.Signup} /> */}
          <Route
            exact
            path="/profile"
            render={routerProps => (
              <Profile {...routerProps} likedSpot={this.state.likedSpot} addFave={this.addFave} />
            )}
          />
        </Switch>
        <SimpleMap />
      </div>
    );
  }
}

export default App;


// render={routerProps => (
//                   coordinates={{
//                     lat: this.state.xcoordinate,
//                     lng: this.state.ycoordinate
//                   }}
//                   {...routerProps}
//                   handleSearchRestaurant={this.handleSearchRestrooms}
//                   AllRestaurant={this.state.AllRestrooms}
