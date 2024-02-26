import Notification from "@/src/components/Notification";
import { NextSeo } from "next-seo";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import SEOConfig from "../components/Common/SEO";
import { QUERY_KEYS } from "../constants/Auth/auth.constant";
import NotificationApi from "../services/Notification/api";

const NotificationPage = () => {
  const SEOConfigProps = {
    title: "멘투멘 | 내 알림 페이지",
    description: "멘투멘 내 알림 페이지입니다.",
    url: "/notification",
  };

  return (
    <>
      <SEOConfig {...SEOConfigProps} />
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
