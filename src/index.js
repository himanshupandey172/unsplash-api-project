import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./style/App.css";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//ReactDOM.render(<App />, document.getElementById("root"));
