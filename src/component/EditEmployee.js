import React from "react";
import AddEmployee from "./AddEmployee";
import employees from "../utils/dataSource";

const EditEmployee = (props) => {
  const { empId } = props.match.params;

  const fetchEmployee = employees.find((data) => data.id === empId);

  return (
    <div>
      <AddEmployee mode="edit" employeeData={fetchEmployee} />
    </div>
  );
};

export default EditEmployee;
