import { Routes, Route } from "react-router-dom";
import Home from "../components/main/home/home";
import List from "../components/main/list/list";
import AuthLoadingPage from "../page/auth/authLoadingPage";
import IntroducePage from "../page/introduce/introduce";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default Router;
