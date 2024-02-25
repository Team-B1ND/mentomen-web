import flex from "@/src/styles/flex";
import Image from "next/image";
import styled from "styled-components";
import { useDAtuhLogin } from "../hooks/Auth/useDAtuhLogin";
import useHideHeaderOrNav from "../hooks/common/useHideHeaderOrNav";
import b1nd from "@/public/icons/logo/b1nd.png";
import { useSeoConfig } from "../hooks/SEO/useSeoConfig";
import { DefaultSeo, NextSeo } from "next-seo";

function AuthLoadingPage() {
  useDAtuhLogin();
  useHideHeaderOrNav("Both");

  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | DAuth 로그인 중...",
    description: "맨투맨 DAuth 로그인 중...",
    url: "/callback",
  });

  return (
    <>
      <DefaultSeo {...SeoNextConfigProps} />
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
  ${flex({
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
