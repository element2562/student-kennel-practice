import React, { Component } from "react";

export default class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.employees.map(item => {
          return <div>{item.name}</div>;
        })}
      </React.Fragment>
    );
  }
}
