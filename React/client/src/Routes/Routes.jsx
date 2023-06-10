import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home";
import NavBar from "../Layout/NavBar/NavBar";
import AddStudent from "../components/Students/AddStudent/AddStudent.jsx";
import EditStudent from "../components/Students/EditStudent/EditStudent.jsx";

const Routes = () => {
  return (
    <Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/addStudent" component={ AddStudent } exact />
          <Route path="/editStudent" component={ EditStudent } exact />
        </Switch>
      </Fragment>
  );
};

export default Routes;