import Tag from "@/src/components/Tag";
import { QUERY_KEYS } from "@/src/stories/core";
import { useSeoConfig } from "@/src/hooks/SEO";
import { PostApi } from "@/src/services/Post/post.api";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

const TagPage = ({ tag }: { tag: string }) => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: `멘투멘 | ${tag} 태그 페이지`,
    description: `멘투멘 ${tag} 태그 페이지입니다.`,
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Tag />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const tag = context.params?.tag as string;

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getPostByTag(tag), () =>
      PostApi.getPostByTag(tag)
    ),
  ]);

  return {
    props: {
      tag,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TagPage;
