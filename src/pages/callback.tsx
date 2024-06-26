import Image from "next/image";
import styled from "styled-components";
import b1nd from "@/public/icons/logo/b1nd.png";
import { NextSeo } from "next-seo";
import { Column } from "../stories/layout";
import { useDAtuhLogin } from "../hooks/Auth";
import { useSeoConfig } from "../hooks/SEO";

function AuthLoadingPage() {
  useDAtuhLogin();

  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | DAuth 로그인 중...",
    description: "멘투멘 DAuth 로그인 중...",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Column
        $width={"100%"}
        $height={"95vh"}
        $rowGap={"10px"}
        $alignItems={"center"}
        $justifyContent={"center"}
      >
        <B1ndLogo src={b1nd} alt="" />
        <Text>
          <span>도담도담</span> 계정으로 로그인 중...
        </Text>
      </Column>
    </>
  );
}

export default AuthLoadingPage;

const Text = styled.p`
  font-family: "Pretendard-Medium" !important;
  span {
    font-family: "Pretendard-Bold" !important;
    color: #2b65b6;
  }
`;

const B1ndLogo = styled(Image)`
  width: 100px;
  height: 100px;
`;
