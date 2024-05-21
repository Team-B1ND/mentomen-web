import Notification from "@/src/components/Notification";
import { NextSeo } from "next-seo";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { QUERY_KEYS } from "../stories/core";
import { useSeoConfig } from "../hooks/SEO";
import { NotificationApi } from "../services/Notification/notification.api";

const NotificationPage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 내 알림 페이지",
    description: "멘투멘 내 알림 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Notification />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(
      QUERY_KEYS.Notice.getNoticeList,
      NotificationApi.getNoticeList
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default NotificationPage;
