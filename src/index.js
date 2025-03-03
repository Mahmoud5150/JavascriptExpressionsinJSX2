import React from "react";
import ReactDOM from "react-dom";

const name = "Mahmoud";
const year = 2025;

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
