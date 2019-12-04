/* <MDBContainer className="mt-5">
  <div className="x">
    <MDBInput
      type="radio"
      className="sort"
      name="name"
      value="All"
      onClick={this.onClick(1)}
      checked={this.state.radio === 1 ? true : false}
      label="All"
      onChange={event => this.props.setSortTerm(event.target.value)}
      id="radio1"
    />
  </div>
  <MDBInput
    type="radio"
    className="sort"
    name="name"
    value="public"
    onChange={event => this.props.setSortTerm(event.target.value)}
    onClick={this.onClick(2)}
    checked={this.state.radio === 2 ? true : false}
    label="Public"
    id="radio2"
  />
  <MDBInput
    type="radio"
    className="sort"
    name="name"
    value="coffee shop"
    onChange={event => this.props.setSortTerm(event.target.value)}
    onClick={this.onClick(3)}
    checked={this.state.radio === 3 ? true : false}
    label="Coffee Shop"
    id="radio3"
  />
  <MDBInput
    onClick={this.onClick(4)}
    name="book store"
    value="book store"
    checked={this.state.radio === 4 ? true : false}
    label="Book store"
    id="radio4"
    type="radio"
    onChange={event => this.props.setSortTerm(event.target.value)}
  />
  <MDBInput
    onClick={this.onClick(5)}
    name="hotel"
    value="hotel"
    checked={this.state.radio === 5 ? true : false}
    label="Hotel"
    id="radio5"
    type="radio"
    onChange={event => this.props.setSortTerm(event.target.value)}
  />
  <MDBInput
    onClick={this.onClick(6)}
    name="fast food"
    value="fast food"
    checked={this.state.radio === 6 ? true : false}
    label="Fast Food"
    id="radio6"
    type="radio"
    onChange={event => this.props.setSortTerm(event.target.value)}
  />
</MDBContainer>; */


## Get user's location
  getAddress() {
     fetch(
       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
         this.state.currentProfile.user_location
           ? this.state.currentProfile.user_location.latitude
           : this.state.xcoordinate
       },${
         this.state.currentProfile.user_location
           ? this.state.currentProfile.user_location.longitude
           : this.state.ycoordinate
       }&key=`
     )
       .then(res => res.json())
       .then(data =>
         this.setState({
           userAddress: data.results[0].formatted_address
         })
       );
   }