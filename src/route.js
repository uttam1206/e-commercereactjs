import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./App";
import AboutPage from "./AboutUs";
import NewUser from "./NewUser";

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/AboutUs" component={AboutPage} />
      <Route path="/NewUser" component={NewUser} />
    </Switch>
  </Router>
);

export default Routing;
