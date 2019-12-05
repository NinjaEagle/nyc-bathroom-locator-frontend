import React, { Component } from 'react';
// import { MDBContainer, MDBInput } from "mdbreact";
class Filter extends Component {
    state = {
        value: '',
        radioButton: false,
    }
  

    handleChange = e => {
        this.setState({value : e.target.value})
    }

    onClickButton = e => {
        if(e.target.checked && !this.state.radioButton){
            this.setState({radioButton:true})
        }
        else if(e.target.checked && this.state.radioButton){
            this.setState({radioButton:false})
        }
    }

    render() {
  
        return (
          <div className="filter-list">
            <h3>Filter By:</h3>
            <label className="sort">
              <input
                type="radio"
                onClick={this.onClickButton}
                value="All"
                name="name"
                checked={this.props.sortTerm === "All" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              All
            </label>
            <label className="sort">
              <input
                type="radio"
                className="sort"
                name="name"
                value="public"
                checked={this.props.sortTerm === "public" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Public
            </label>
            <label className="sort">
              <input
                type="radio"
                className="sort"
                name="name"
                value="coffee shop"
                checked={this.props.sortTerm === "coffee shop" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Coffee Shop
            </label>
            <label className="sort">
              <input
                type="radio"
                className="sort"
                name="name"
                value="book store"
                checked={this.props.sortTerm === "book store" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Book Store
            </label>
            <label className="sort">
              <input
                type="radio"
                className="sort"
                name="name"
                value="hotel"
                checked={this.props.sortTerm === "hotel" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Hotel
            </label>
            <label className="sort">
              <input
                type="radio"
                className="sort"
                name="name"
                value="fast food"
                checked={this.props.sortTerm === "fast food" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Fast Food
            </label>
            <label className="sort">
              <input
                type="radio"
                className="sort"
                name="name"
                value="department store"
                checked={this.props.sortTerm === "department store" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Department Store
            </label>
            <label className="sort">
              <input
                type="radio"
                className="sort"
                name="name"
                value="other"
                checked={this.props.sortTerm === "other" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Other
            </label>
            <label className="sort">
              <input
                type="checkbox"
                className="sort"
                name="name"
                value="Yes"
                checked={this.props.sortTerm === "Yes" ? true : ""}
                onChange={event => this.props.setSortTerm(event.target.value)}
              />
              Wheelchair Accessible
            </label>
            <br />
          </div>
        );
    }
}
export default Filter;

