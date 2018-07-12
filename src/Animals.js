import React, { Component } from "react";
import Animal from "./Animal"
export default class Animals extends Component {
state = {
    animals: [
    { id: 1, name: "Cat" },
    { id: 2, name: "Dog" },
    { id: 3, name: "Tiger" },
    { id: 4, name: "Liger" }
  ],
  owners: [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Smith John" },
    { id: 3, name: "Ith Smohnj" },
    { id: 4, name: "Ohn Smithj" }
  ],
  ownersandanimals: [
    { id: 1, ownerId: 2, animalId: 4 },
    { id: 2, ownerId: 2, animalId: 2 },
    { id: 3, ownerId: 3, animalId: 3 },
    { id: 4, ownerId: 4, animalId: 4 }
  ]
}
  render() {
    return (
      <React.Fragment>
        {/* {this.state.ownersandanimals.map(item => {
          let currentAni = item.animalId - 1;
          let currentOwn = item.ownerId - 1;
          // let animal = Animal()
          // console.log(currentAni);
          // console.log(currentOwn); */}
            <ul>
              {this.state.animals.map(item => {
                return <Animal animals={item} />
              })}
              {/* {this.state.animals[currentAni].name}
              {this.state.owners[currentOwn].name} */}
            </ul>
      </React.Fragment>
    );
  }
}
