import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PageTemplate from "./components/common/pageTemplate/pageTemplate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <App />
  </div>
);
