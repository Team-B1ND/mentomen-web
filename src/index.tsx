import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div style={{ width: "100%", minHeight: "100vh", background: "#F4F4F4" }}>
    <App />
  </div>
);
