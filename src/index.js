import React from "react";
import ReactDOM from "react-dom";

import App from "./App/App.js";

const Main = () => {
  return <App />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);