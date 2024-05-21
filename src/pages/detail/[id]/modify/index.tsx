import RequestMentorForm from "@/src/components/RequestMentorForm";
import { useSeoConfig } from "@/src/hooks/SEO";
import { NextSeo } from "next-seo";
import React from "react";

const ModifyDetailByIdPage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 멘토 요청 수정 페이지",
    description: "멘투멘 멘토 요청 수정 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <RequestMentorForm type={"MODIFY"} />
    </>
  );
};

export default ModifyDetailByIdPage;
