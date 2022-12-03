import React from "react";
import PageTemplate from "./components/common/pageTemplate/pageTemplate";
import Router from "./router/router";

function App() {
  return (
    <>
      <PageTemplate>
        <Router />
      </PageTemplate>
    </>
  );
}

export default App;
