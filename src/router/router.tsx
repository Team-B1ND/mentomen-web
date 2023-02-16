import { Routes, Route } from "react-router-dom";
import Detail from "../components/detail";
import AuthLoadingPage from "../pages/auth/AuthLoadingPage";
import HomePage from "../pages/HomePage";
import IntroducePage from "../pages/IntroducePage";
import StartPage from "../pages/StartPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path='/detai:id' element={<Detail/>} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Router;
