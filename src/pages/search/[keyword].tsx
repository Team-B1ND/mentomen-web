import Search from "@/src/components/Search";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import { useSeoConfig } from "@/src/hooks/SEO/useSeoConfig";
import PostApi from "@/src/services/Post/api";
import { NextPageContext } from "next";
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

SerachPage.getInitialProps = async (ctx: NextPageContext) => {
  const queryClient = new QueryClient();

  if (ctx.query.keyword) {
    await Promise.all([
      queryClient.prefetchQuery(
        QUERY_KEYS.Post.getPostByKeyWord(ctx.query.keyword as string),
        () => PostApi.getPostByKeyWordApi(ctx.query.keyword as string)
      ),
    ]);
  }

  return {
    keyword: ctx.query.keyword as string,
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SerachPage;
