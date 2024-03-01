import Detail from "@/src/components/Detail";
import { QUERY_KEYS } from "@/src/stories/core";
import { useSeoConfig } from "@/src/hooks/SEO";
import PostApi from "@/src/services/Post/api";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { dehydrate, QueryClient } from "react-query";

const DetailPage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 상세 페이지",
    description: "멘투멘 상세 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Detail />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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
  };
};

export default DetailPage;
