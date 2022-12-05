import { Routes, Route } from "react-router-dom";
import Home from "../components/main/home/home";
import AuthLoadingPage from "../page/auth/authLoadingPage";
import IntroducePage from "../page/introduce/introduce";
import ListPage from "../page/listpage/listpage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </>
  );
}

export default Router;
