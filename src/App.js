import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeTable from "./component/EmployeeTable";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-12">
          <h1 className="text-center" style={style}>
            Employee Details
          </h1>

          <Switch>
            <Route path="/" exact component={EmployeeTable} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/edit/:empId" component={EditEmployee} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
