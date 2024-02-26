import SEOConfig from "@/src/components/Common/SEO";
import RequestMentor from "@/src/components/RequestMentor";
import { useRouter } from "next/router";
import React from "react";

const ModifyPage = () => {
  const router = useRouter();

  const SEOConfigProps = {
    title: "멘투멘 | 멘토 요청 수정 페이지",
    description: "멘투멘 멘토 요청 수정 페이지입니다.",
    url: "/request-mentor/modify",
  };

  return (
    <>
      <SEOConfig {...SEOConfigProps} />
      <RequestMentor
        type={router.pathname === "/request-mentor/modify" ? "MODIFY" : "WRITE"}
      />
    </>
  );
};

export default ModifyPage;
