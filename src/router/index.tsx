import { Routes, Route } from "react-router-dom";
import AuthLoadingPage from "../pages/AuthLoadingPage";
import HomePage from "../pages/HomePage";
import IntroducePage from "../pages/IntroducePage";
import MyPostPage from "../pages/MyPostPage";
import StartPage from "../pages/StartPage";
import NotFound from "../components/Common/NotFound";
import TagPage from "../pages/TagPage";
import SerachPage from "../pages/SerachPage";

function Router() {
  return (
    <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      <Route path="/mypage" element={<MyPostPage />} />
      <Route path="/intro" element={<IntroducePage />} />
      <Route path="/tag/:tag" element={<TagPage />} />
      <Route path="/search/:keyword" element={<SerachPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
