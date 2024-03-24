import Image from "next/image";
import styled from "styled-components";
import b1nd from "@/public/icons/logo/b1nd.png";
import { NextSeo } from "next-seo";
import { Flex } from "../stories/layout";
import { useDAtuhLogin } from "../hooks/Auth";
import { useHideHeaderOrNav } from "../hooks/HideHeaderOrNav";
import { useSeoConfig } from "../hooks/SEO";

function AuthLoadingPage() {
  useDAtuhLogin();
  useHideHeaderOrNav("Both");

  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | DAuth 로그인 중...",
    description: "멘투멘 DAuth 로그인 중...",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Container>
        <B1ndLogo src={b1nd} alt="" />
        <Text>
          <span>도담도담</span> 계정으로 로그인 중...
        </Text>
      </Container>
    </>
  );
}

export default AuthLoadingPage;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  ${Flex({
    flexDirection: "column",
    rowGap: "10px",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

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
