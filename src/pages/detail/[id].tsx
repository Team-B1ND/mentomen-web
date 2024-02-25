import Detail from "@/src/components/Detail";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import { useSeoConfig } from "@/src/hooks/SEO/useSeoConfig";
import PostApi from "@/src/services/Post/api";
import { NextPageContext } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { dehydrate, QueryClient } from "react-query";

const DetailPage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 상세 페이지",
    description: "맨투멘 상세 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Detail />
    </>
  );
};

DetailPage.getInitialProps = async (ctx: NextPageContext) => {
  const queryClient = new QueryClient();

  if (ctx.query.id) {
    await Promise.all([
      queryClient.prefetchQuery(
        QUERY_KEYS.Post.getPostById(Number(ctx.query.id)),
        () => PostApi.getPostByIdApi(Number(ctx.query.id))
      ),
    ]);
  }

  return {
    id: ctx.query.id as string,
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DetailPage;
