import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
// import {GoogleMap} from 'react-google-maps';
import simpleMap from './components/simpleMap'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={Pages.Home} /> */}
        {/* <Route exact path="/restroom/login" component={Pages.Login} /> */}
        {/* <Route exact path="/daimon/signup" component={Pages.Signup} /> */}
        {/* <Route exact path="/daimon/profile" component={Pages.Profile} /> */}
      </Switch>
      <simpleMap />
    </div>
  );
}

export default App
