import React, { Component } from 'react';

class Review extends Component {
  state = {
    username:'',
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
            <div className="six wide field">
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
            </div>
            <div className="six wide field">
              <div className="field">
                <label>Review</label>
                <textarea
                  name="review"
                  value={this.state.review}
                  onChange={this.handleChange}
                  rows="2"
                ></textarea>
              </div>
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="myreviews">
          <h3>My Reviews</h3>
          <div className="reviewlist">
            {this.props.myReviews.map(review => {
              return (
                  <div className="review-item">
                    <h3 className="review-title">{review.name}</h3>
                    {review.review}
                    
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