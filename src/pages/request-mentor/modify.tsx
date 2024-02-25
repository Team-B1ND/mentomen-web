import RequestMentor from "@/src/components/RequestMentor";
import { useNextSeo } from "@/src/hooks/common/useNextSeo";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";

const ModifyPage = () => {
  const router = useRouter();

  const { SeoProps } = useNextSeo({
    title: "멘투멘 | 멘토 요청 수정 페이지",
    description: "멘투멘 멘토 요청 수정 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoProps} />
      <RequestMentor
        type={router.pathname === "/request-mentor/modify" ? "MODIFY" : "WRITE"}
      />
    </>
  );
};

export default ModifyPage;
