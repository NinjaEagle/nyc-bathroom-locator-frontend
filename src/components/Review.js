import React, { Component } from 'react';

class Review extends Component {
  state = {
    username:'',
    review: '',
    name:'',
  };

  handleChange = e => {
    console.log(e.target.value);
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
          <form onSubmit={this.handleSubmit} class="ui form">
            <div class="six wide field">
              <div class="field">
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
            <div class="six wide field">
              <div class="field">
                <label>Review</label>
                <textarea
                  name="review"
                  value={this.state.review}
                  onChange={this.handleChange}
                  rows="2"
                ></textarea>
              </div>
            </div>
            <button class="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="myreviews">
          <h3>My Reviews</h3>
          <ul className="reviewlist">
            {this.props.myReviews.map(review => {
              return (
                <li>
                  <div>
                    <h4>{review.name}</h4>
                    {review.review}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Review;