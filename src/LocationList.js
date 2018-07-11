import React, { Component } from "react";

class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.locations.map(locations => {
          return <div>{locations.name}</div>;
        })}
      </React.Fragment>
    );
  }
}
export default LocationList;
