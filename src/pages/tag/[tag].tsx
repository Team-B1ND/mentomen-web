import Tag from "@/src/components/Tag";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import { useSeoConfig } from "@/src/hooks/SEO/useSeoConfig";
import PostApi from "@/src/services/Post/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

const TagPage = ({ tag }: { tag: string }) => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: `멘투멘 | ${tag} 태그 페이지`,
    description: `맨투맨 ${tag} 태그 페이지입니다.`,
    url: `/tag/${tag}`,
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Tag />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  const tag = context.params?.tag as string;

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getPostByTag(tag), () =>
      PostApi.getPostByTagApi(tag)
    ),
  ]);

  return {
    props: {
      tag,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 2,
  };
};

export default TagPage;
