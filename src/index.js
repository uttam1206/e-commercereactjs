import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./route";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render((
  <BrowserRouter>
    <Routing />
  </BrowserRouter>),
  document.getElementById("root")
);
registerServiceWorker();
