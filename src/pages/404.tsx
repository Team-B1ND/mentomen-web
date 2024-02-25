import useHideHeaderOrNav from "@/src/hooks/common/useHideHeaderOrNav";
import flex from "@/src/styles/flex";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import { useSeoConfig } from "../hooks/SEO/useSeoConfig";

const NotFound = () => {
  useHideHeaderOrNav("Both");

  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 존재하지 않는 페이지",
    description: "맨투맨 존재하지 않는 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Container>404 - 존재하지 않는 페이지입니다.</Container>
    </>
  );
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
