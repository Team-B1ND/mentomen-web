import SEOConfig from "@/src/components/Common/SEO";
import Detail from "@/src/components/Detail";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import PostApi from "@/src/services/Post/api";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";

const DetailPage = ({ id }: { id: string }) => {
  const SEOConfigProps = {
    title: "멘투멘 | 상세 페이지",
    description: "맨투멘 상세 페이지입니다.",
    url: `/detail/${id}`,
  };

  return (
    <>
      <SEOConfig {...SEOConfigProps} />
      <Detail />
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

  const id = context.params?.id as string;

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getPostById(Number(id)), () =>
      PostApi.getPostByIdApi(Number(id))
    ),
  ]);

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 2,
  };
};

export default DetailPage;
