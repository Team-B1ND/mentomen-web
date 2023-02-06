import { Routes, Route } from "react-router-dom";
import AuthLoadingPage from "../page/auth/AuthLoadingPage";
import HomePage from "../page/HomePage";
import IntroducePage from "../page/IntroducePage";
import StartPage from "../page/StartPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Router;
