import Detail from "@/src/components/Detail";
import { QUERY_KEYS } from "@/src/stories/core";
import { useSeoConfig } from "@/src/hooks/SEO";
import PostApi from "@/src/services/Post/PostApi";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import CommentApi from "@/src/services/Comment/CommentApi";

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
  const id = Number(context.params?.id);

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getPostById(id), () =>
      PostApi.getPostByIdApi(id)
    ),
    queryClient.prefetchQuery(QUERY_KEYS.Comment.getComment(id), () =>
      CommentApi.getCommentApi(id)
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
