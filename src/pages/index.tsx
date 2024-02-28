import Home from "@/src/components/Home";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";
import { QUERY_KEYS } from "../stories/core";
import { useSeoConfig } from "../stories/hooks";
import PostApi from "../services/Post/api";

const HomePage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 멘토와 멘티를 잇다",
    description: "멘토에게 궁금하거나 알고 싶었던 전공지식에 관해 물어보세요!",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
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
