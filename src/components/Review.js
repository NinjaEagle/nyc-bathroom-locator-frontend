import React, { Component } from 'react';

class Review extends Component {
  state = {
    review: '',
    name:'',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createReview(this.state)
  };
  
  render() {

    return (
      <div className="reviews-container">
        <div className="review-form">
          <h3>Add a review:</h3>
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="twelve wide field">
              <select onChange= {this.handleChange} value={this.state.name} name="name" className ="ui fluid dropdown">
                <option value="">Restaurant Name</option>
                  <option value="Cadman Plaza & Brooklyn War Memorial" >Cadman Plaza & Brooklyn War Memorial</option>
                  <option value="Brooklyn Roasting Company" >Brooklyn Roasting Company</option>
                  <option value="Waldorf Astoria" name="3">Waldorf Astoria</option>
                  <option value="Marriott Marquis" name="4">Marriott Marquis</option>
                  <option value="Bryant Park Restrooms"name="5">Bryant Park Restrooms</option>
                  <option value="Macys 34th St Department Store" name="6">Macys 34th St Deparment Store</option>
                  <option value="Barnes and Nobles" name="7">Barnes and Nobles</option>
                  <option value="Burger King" name="8">Burger King</option>
                  <option value="WeWork Dumbo" name="9">WeWork Dumbo</option>
                  <option value="McDonalds" >McDonalds</option>
                  <option value="Chipotle Mexican Grill">Chipotle Mexican Grill</option>
                  <option value="citizenM New York Times Square Hotel">citizenM New York Times Square Hotel</option>
                  <option value="Bed Bath and Beyond">Bed Bath and Beyond</option>
                  <option value="The Shops at Columbus Circle" name="name">The Shops at Columbus Circle</option>
              </select>
              </div>
     
            <div className="eight wide field">
                <label>Review</label>
                <textarea
                  name="review"
                  value={this.state.review}
                  onChange={this.handleChange}
                  rows="2"
                ></textarea>
              <div>
                <input className="ui submit button" type="submit" value="Submit"/>
              </div>
            </div>
          </form>
        </div>
        <div className="myreviews">
          <h3>My Reviews</h3>
          <div className="reviewlist">
            {this.props.myReviews.map(review => {
              return (
                  <div className="review-item" key={review.id}>
                    <h3 className="review-title">{review.restroom_name}</h3>
                    
                    <div className="review-text">{review.text}</div>
                    <button className="reviewbutton" onClick={event => {this.props.deleteReview(review)}}> 
                       x
                      </button>
                  </div>   
  
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Review;

       /* <div className="six wide field">
              <div className="field">
                <label>Restroom Name</label>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name"
                  type="text"
                />
              </div>
            </div> */