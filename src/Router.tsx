import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import GlobalStyle from "./style/Global";
import Home from "./components/Main/Home/Home";
import AuthLoadingPage from "./page/auth/AuthLoadingPage";

function Router() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<AuthLoadingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
