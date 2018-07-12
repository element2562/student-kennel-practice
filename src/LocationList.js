import React, { Component } from "react";

class LocationList extends Component {
  state = {
    locations: [
      { id: 1, name: "Nashville Software School" },
      { id: 2, name: "Nashville People Pound" },
      { id: 3, name: "Some other made up place" }
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.locations.map(locations => {
          return <div>{locations.name}</div>;
        })}
      </React.Fragment>
    );
  }
}
export default LocationList;
