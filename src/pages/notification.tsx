import Notification from "@/src/components/Notification";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { QUERY_KEYS } from "../constants/Auth/auth.constant";
import { useNextSeoConfig } from "../hooks/SEO/useNextSeoConfig";
import NotificationApi from "../services/Notification/api";

const NotificationPage = () => {
  const { SeoConfigProps } = useNextSeoConfig({
    title: "멘투멘 | 내 알림 페이지",
    description: "멘투멘 내 알림 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoConfigProps} />
      <Notification />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(
      QUERY_KEYS.Notice.getNoticeList,
      NotificationApi.getNoticeListApi
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default NotificationPage;
