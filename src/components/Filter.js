import React, { Component } from 'react';

class Filter extends Component {
    state = {
        value: '',
        radioButton: false
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
             <div className="filter">
            <label className="sort">
            <input type="radio" onClick={this.onClickButton}  value="All" name="name" checked={this.state.radioButton} checked={this.props.sortTerm==="All"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
            All
            </label>
            <label className="sort">
            <input type="radio" className="sort" name="name" value="public" checked={this.props.sortTerm==="all"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
            Public
            </label>
            <label className="sort" >
            <input type="radio" className="sort" name="name" value="coffee shop" checked={this.props.sortTerm==="coffee shop"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
            Coffee Shop
            </label>
            <label className="sort" >
            <input type="radio" className="sort" name="name" value="hotel " checked={this.props.sortTerm==="hotel"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
            Hotel
            </label>
         <label className="sort" >
            <input type="radio" className="sort" name="name" value="fast food " checked={this.props.sortTerm==="fast food"? true : ""} onChange={(event) => this.props.setSortTerm(event.target.value)}/>
            Fast Food
            </label>


            <br/>

            <label>
                <h3 className="hood">Neighborhood</h3>
                <select onChange={(event) => this.props.setFilterTerm(event.target.value)} value={this.props.term}>
                </select>
            </label>  
            </div>
            );
    }
}

export default Filter;