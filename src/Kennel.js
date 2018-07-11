import React, { Component } from "react";
import EmployeeList from "./EmployeeList"; // Import EmployeeList component
import LocationList from "./LocationList";
import Animals from "./Animals";
export default class Kennel extends Component {
  state = {
    locations: [
      { id: 1, name: "Nashville Software School" },
      { id: 2, name: "Nashville People Pound" },
      { id: 3, name: "Some other made up place" }
    ],
    employees: [
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
    ],
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
  };
  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <Animals
          animals={this.state.animals}
          owners={this.state.owners}
          ownersandanimals={this.state.ownersandanimals}
        />
      </React.Fragment>
    );
  }
}

/* <article>
<h1>Employee List</h1>
<section>Jessica Younker</section>
<section>Jordan Nelson</section>
<section>Zoe LeBlanc</section>
<section>Blaise Roberts</section>
</article> */
