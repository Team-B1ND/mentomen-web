import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";
import MyPage from "../components/MyPage";
import { QUERY_KEYS } from "../stories/core";
import { useSeoConfig } from "../hooks/SEO";
import { UserApi } from "../services/User/user.api";

const MyPagePage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 내 정보 페이지",
    description: "멘투멘 내 정보 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <MyPage />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.User.getMyPost, UserApi.getMyPost),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyPagePage;
