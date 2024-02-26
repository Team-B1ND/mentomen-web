import { dehydrate, QueryClient } from "react-query";
import SEOConfig from "../components/Common/SEO";
import MyPage from "../components/MyPage";
import { QUERY_KEYS } from "../constants/Auth/auth.constant";
import UserApi from "../services/User/api";

const MyPagePage = () => {
  const SEOConfigProps = {
    title: "맨투멘 | 내 정보 페이지",
    description: "맨투맨 내 정보 페이지입니다.",
    url: "/mypage",
  };

  return (
    <>
      <SEOConfig {...SEOConfigProps} />
      <MyPage />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.User.getMyPost, UserApi.getMyPostApi),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyPagePage;
