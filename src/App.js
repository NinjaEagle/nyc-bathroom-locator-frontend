import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pages from './pages';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
// styling
import './App.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

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
    console.log(spot);
    if (!this.state.faveSpots.includes(spot)) {
      fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: {
          "Accepts": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: 1,
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
    fetch(`http://localhost:3000/favorites/${favorite.id}`, {
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
    console.log(this.state.faveSpots)
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/home"
            render={routerProps => (
              <Home
                faveSpots={this.state.faveSpots}
                deleteFave={this.deleteFave}
                addFave={this.addFave}
              />
            )}
          />
          {/* <Route exact path="/login" component={Pages.Login} />
          <Route exact path="/signup" component={Pages.Signup} /> */}
          <Route
            exact
            path="/profile"
            render={routerProps => (
              <Profile
                {...routerProps}
                faveSpots={this.state.faveSpots}
                addFave={this.addFave}
              />
            )}
          />
        </Switch>
        <div className="bottom bar"> 
              Contact me:
        </div>
      </div>
    );
  }
}

export default App;

// / componentDidMount() {
  //   if (localStorage.token){
  //   fetch(`http://localhost:3000/profile`,
  //   {headers: {
  //     Authorization: localStorage.token
  //   }})
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({
  //         name: data.name
  //       });
  //     });
  //   }
  // }
// render={routerProps => (
//                   coordinates={{
//                     lat: this.state.xcoordinate,
//                     lng: this.state.ycoordinate
//                   }}
//                   {...routerProps}
//                   handleSearchRestaurant={this.handleSearchRestrooms}
//                   AllRestaurant={this.state.AllRestrooms}
