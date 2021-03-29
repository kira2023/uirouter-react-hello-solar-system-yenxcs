import React from "react";
import ReactDOM from "react-dom";
import { UIRouter, pushStateLocationPlugin } from "@uirouter/react";
import states from "./config/states";
import config from "./config/router";
import App from "./components/App";
import("./style.css");

ReactDOM.render(
  <UIRouter
    plugins={[pushStateLocationPlugin]}
    config={config}
    states={states}
  >
    <App />
  </UIRouter>,
  document.getElementById("root")
);
