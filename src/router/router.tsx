import { Routes, Route } from "react-router-dom";
import Detail from "../components/detail";
import TagList from "../components/tag";
import AuthLoadingPage from "../pages/auth/AuthLoadingPage";
import HomePage from "../pages/HomePage";
import IntroducePage from "../pages/IntroducePage";
import MyPage from "../pages/MyPage";
import StartPage from "../pages/StartPage";
import KeyWord from "../components/keyword";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path='/detail/:postId' element={<Detail/>} />
        <Route path='/:tag' element={<TagList />} />
        <Route path='/search/:keyword' element={<KeyWord />} />
      </Routes>
    </>
  );
}

export default Router;
