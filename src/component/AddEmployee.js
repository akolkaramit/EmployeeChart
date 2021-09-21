import React, { Component } from "react";
import employees from "../utils/dataSource";
import { uuid } from "uuidv4";

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    console.log("props: ", props);

    if (props.mode && props.mode === "edit") {
      const { firstName, lastName, dob, designation, photo, experience } =
        props.employeeData;
      this.state = {
        firstName,
        lastName,
        dob,
        designation,
        photo,
        experience,
      };
    } else {
      this.state = {
        firstName: "",
        lastName: "",
        dob: "",
        designation: "",
        photo: "",
        experience: 0,
      };
    }
  }

  changeEmpDetails = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitEmployee = (e) => {
    e.preventDefault();

    const { firstName, lastName, dob, designation, photo, experience } =
      this.state;

    if (this.props.mode === "edit") {
      // edit
    } else {
       employees.push({
        id: uuid(),
        firstName,
        lastName,
        dob,
        designation,
        photo,
        experience,
      });
    }
  };

  render() {
    const { firstName, lastName, dob, designation, photo, experience } =
      this.state;

    return (
      <div>
        <form onSubmit={this.submitEmployee}>
          <label>First Name</label>
          <input
            type="text"
            onChange={this.changeEmpDetails}
            value={firstName}
            name="firstName"
          />

          <label>Last Name</label>
          <input
            type="text"
            onChange={this.changeEmpDetails}
            value={lastName}
            name="lastName"
          />

          <label>DOB</label>
          <input
            type="text"
            onChange={this.changeEmpDetails}
            value={dob}
            name="dob"
          />

          <label>Profile Photo</label>
          <input
            type="text"
            onChange={this.changeEmpDetails}
            value={photo}
            name="photo"
          />

          <label>Designation</label>
          <input
            type="text"
            onChange={this.changeEmpDetails}
            value={designation}
            name="designation"
          />

          <label>Experience</label>
          <input
            type="number"
            onChange={this.changeEmpDetails}
            value={experience}
            name="experience"
          />

          <input type="submit" value="Add Employee" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
