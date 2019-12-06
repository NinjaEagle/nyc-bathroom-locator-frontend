import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import About from "./pages/About"
import './App.css';

class App extends React.Component {
  state = {
    xcoordinate: 40.700771,
    ycoordinate: -73.987411,
    name: "",
    faveSpots: [],
    myReviews:[]
  };

  redirect = page => {
    this.setState({ page: page });
  };

  addFave = spot => {
    let copiedSpots = this.state.faveSpots
    if (!copiedSpots.filter(e => e.restroom.id === spot.id).length > 0) {
      // fetch("http://localhost:3000/favorites", {
        fetch("https://nyc-restrooms-locator-backend.herokuapp.com/favorites",{
        method: "POST",
        headers: {
          Accepts: "application/json",
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

  createReview = newReview =>{
    if (!this.state.myReviews.includes(newReview)) {
      // fetch("http://localhost:3000/reviews", {
        fetch("https://nyc-restrooms-locator-backend.herokuapp.com/reviews",{
        method: "POST",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: 1,
          restroom_name: newReview.name,
          text: newReview.review
        })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            myReviews: [...this.state.myReviews, data]
          });
        })
    }
  }

  deleteReview = review => {
    // fetch(`http://localhost:3000/reviews/${review.id}`, {
    fetch(`https://nyc-restrooms-locator-backend.herokuapp.com/${review.id}`,{
      method: "DELETE"
    }).then(() => {
      const updatedReviews = this.state.myReviews.filter(aReview => {
        return aReview.id !== review.id;
      });
      this.setState({
        myReviews: updatedReviews
      });
    });
  };
 

  render() {
    let faveSpots= this.state.faveSpots;
    let myReviews = this.state.myReviews;
  
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
                myReviews={myReviews}
                createReview={this.createReview}
                deleteReview={this.deleteReview}
              />
            )}
          />
        </Switch>
        
      </div>
    );
  }
}

export default App;

