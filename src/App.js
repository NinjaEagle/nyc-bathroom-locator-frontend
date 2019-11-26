import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pages from './pages';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import About from "./pages/About"
// styling
import './App.css';

class App extends React.Component {
  state = {
    xcoordinate: 40.700771,
    ycoordinate: -73.987411,
    allRestrooms: [],
    page: "login",
    name: "",
    faveSpots: []
  };

  redirect = page => {
    this.setState({ page: page });
  };

  addFave = spot => {
    if (!this.state.faveSpots.includes(spot)) {
      // fetch("http://localhost:3000/favorites", {
        fetch("https://nyc-restrooms-locator-backend.herokuapp.com/favorites",{
        method: "POST",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: 3,
          restroom_id: spot.id
        })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            faveSpots: [...this.state.faveSpots, data]
          });
        });
    }
  };

  deleteFave = favorite => {
    console.log(favorite);
    // fetch(`http://localhost:3000/favorites/${favorite.id}`, {
      fetch(`https://nyc-restrooms-locator-backend.herokuapp.com/${favorite.id}`,{
      method: "DELETE"
    }).then(() => {
      const updatedSpots = this.state.faveSpots.filter(aSpot => {
        return aSpot.id !== favorite.id;
      });
      this.setState({
        faveSpots: updatedSpots
      });
    });
  };
 

  render() {
    let faveSpots= this.state.faveSpots;
    console.log(faveSpots)
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Home
                faveSpots={faveSpots}
                deleteFave={this.deleteFave}
                addFave={this.addFave}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={routerProps => (
              <About
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={routerProps => (
              <Profile
                {...routerProps}
                faveSpots={faveSpots}
                addFave={this.addFave}
                deleteFave={this.deleteFave}
              />
            )}
          />
        </Switch>
        <div className="bottom bar">Made by fellow Glorious Pegasus: Kevin Wang</div>
      </div>
    );
  }
}

export default App;

