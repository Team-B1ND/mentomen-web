import { NextSeo } from "next-seo";
import styled from "styled-components";
import { useHideHeaderOrNav } from "../hooks/HideHeaderOrNav";
import { useSeoConfig } from "../hooks/SEO";
import { Flex } from "../stories/layout";

const NotFound = () => {
  useHideHeaderOrNav("Both");

  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 존재하지 않는 페이지",
    description: "멘투멘 존재하지 않는 페이지입니다.",
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
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;
