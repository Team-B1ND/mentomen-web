import Search from "@/src/components/Search";
import { QUERY_KEYS } from "@/src/stories/core";
import { useSeoConfig } from "@/src/hooks/SEO";
import PostApi from "@/src/services/Post/PostApi";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

const SerachPage = ({ keyword }: { keyword: string }) => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: `멘투멘 | ${keyword} 검색`,
    description: `멘투멘 ${keyword}를 검색하셨습니다.`,
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Search />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const keyword = context.params?.keyword as string;

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getPostByKeyWord(keyword), () =>
      PostApi.getPostByKeyWordApi(keyword)
    ),
  ]);

  return {
    props: {
      keyword,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SerachPage;
