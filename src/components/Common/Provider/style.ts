import { Flex } from "@/src/stories/layout";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 1020px;
  ${Flex({ alignItems: "center", flexDirection: "column" })};
`;

export const Wrapper = styled.div<{ hideHeader: boolean }>`
  width: 950px;
  height: 100%;

  padding-top: ${({ hideHeader }) => !hideHeader && "100px"};
  padding-bottom: ${({ hideHeader }) => !hideHeader && "2rem"};
  ${Flex({ justifyContent: "center", columnGap: "3.6rem" })}
`;
