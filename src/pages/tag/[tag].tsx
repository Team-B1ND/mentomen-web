import Tag from "@/src/components/Tag";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import { useNextSeo } from "@/src/hooks/common/useNextSeo";
import PostApi from "@/src/services/Post/api";
import { NextPageContext } from "next";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

const TagPage = ({ tag }: { tag: string }) => {
  const { SeoProps } = useNextSeo({
    title: `멘투멘 | ${tag} 태그 페이지`,
    description: `맨투맨 ${tag} 태그 페이지입니다.`,
  });

  return (
    <>
      <NextSeo {...SeoProps} />
      <Tag />
    </>
  );
};

TagPage.getInitialProps = async (ctx: NextPageContext) => {
  const queryClient = new QueryClient();

  if (ctx.query.tag) {
    await Promise.all([
      queryClient.prefetchQuery(
        QUERY_KEYS.Post.getPostByTag(ctx.query.tag as string),
        () => PostApi.getPostByTagApi(ctx.query.tag as string)
      ),
    ]);
  }
  return {
    tag: ctx.query.tag as string,
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TagPage;
