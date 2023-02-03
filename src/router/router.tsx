import { Routes, Route } from "react-router-dom";
import List from "../components/main/home/home";
import AuthLoadingPage from "../page/auth/AuthLoadingPage";
import Homepage from "../page/HomePage";
import IntroducePage from "../page/IntroducePage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default Router;
