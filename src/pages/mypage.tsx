import { NextSeo } from "next-seo";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import MyPage from "../components/MyPage";
import { QUERY_KEYS } from "../constants/Auth/auth.constant";
import { useNextSeo } from "../hooks/common/useNextSeo";
import UserApi from "../services/User/api";

const MyPagePage = () => {
  const { SeoProps } = useNextSeo({
    title: "맨투멘 | 내 정보 페이지",
    description: "맨투맨 내 정보 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoProps} />
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
