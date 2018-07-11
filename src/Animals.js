import React, { Component } from "react";

export default class Animals extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.ownersandanimals.map(item => {
          let currentAni = item.animalId - 1;
          let currentOwn = item.ownerId - 1;
          console.log(currentAni);
          console.log(currentOwn);
          return (
            <div>
              {this.props.animals[currentAni].name}
              {this.props.owners[currentOwn].name}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
