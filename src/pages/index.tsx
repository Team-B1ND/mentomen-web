import Home from "@/src/components/Home";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";
import { QUERY_KEYS } from "../constants/Auth/auth.constant";
import { useNextSeo } from "../hooks/common/useNextSeo";
import PostApi from "../services/Post/api";

const HomePage = () => {
  const { SeoProps } = useNextSeo({
    title: "멘투멘 | 멘토와 멘티를 잇다",
    description: "멘투멘 메인 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoProps} />
      <Home />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(
      QUERY_KEYS.Post.getAllPost,
      PostApi.getAllPostApi
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
