import App from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import header from "../components/common/header/header";
import GlobalStyle from "../style/Global";
import AuthLoadingPage from "../page/auth/authLoadingPage";
import IntroducePage from "../page/introduce/introduce";
import PageTemplate from "../components/common/pageTemplate/pageTemplate";
import Home from "../components/main/home/home";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<IntroducePage />} />
          <Route path="/callback" element={<AuthLoadingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
