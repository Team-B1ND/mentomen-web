import RequestMentorForm from "../../components/RequestMentorForm";
import { useSeoConfig } from "@/src/hooks/SEO";
import { NextSeo } from "next-seo";
import React from "react";

const RegistPage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 멘토 요청 작성 페이지",
    description: "멘투멘 멘토 요청 작성 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <RequestMentorForm type={"WRITE"} />
    </>
  );
};

export default RegistPage;
