import React from "react";
import employees from "../utils/dataSource";
import { Link, withRouter } from "react-router-dom";

// import employees from "../utils/dataSource";

const EmployeeTable = (props) => {
  const deleteEmployee = (id) => {
    console.log("id: ", id);
    window.confirm();
  };

  const editEmployee = (id) => {
    console.log("id: ", id);
    // history.push(`/edit/${id}`);
    props.history.push({ pathname: `/edit/${id}`, empId: id });
  };

  return (
    <div>
      <h2>Employee Table</h2>

      <table className="employee-table">
        <thead>
          <tr>
            <th>First name </th>
            <th>Last Name</th>
            <th>DOB </th>
            <th>Designation</th>
            <th>Profile Photo</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees &&
            employees.map((employee, index) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.dob}</td>
                  <td>{employee.designation}</td>
                  <td>
                    <div className="employee-img-wrapper">
                      <img src={employee.photo} alt="Employee details" />
                    </div>
                  </td>
                  <td>{employee.experience}</td>
                  <td>
                    <div className="employee-actions-wrapper">
                      <Link to="/add">Add</Link>
                      {/* <Link to={`/edit/${employee.id}`}>Edit</Link> */}
                      <button onClick={() => editEmployee(employee.id)}>
                        Edit
                      </button>
                      <button onClick={() => deleteEmployee(employee.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(EmployeeTable);
