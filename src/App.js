import React from 'react';
// import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Pages from './pages';
// import {GoogleMap} from 'react-google-maps';
import SimpleMap from './components/SimpleMap';
import Home from "./pages/Home";
class App extends React.Component {
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
      });
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Pages.Home}/>
          <Route exact path="/login" component={Pages.Login} />
          <Route exact path="/signup" component={Pages.Signup} />
          <Route exact path="/profile" component={Pages.Profile} />
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
