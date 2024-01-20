import flex from "@/src/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  ${flex({ justifyContent: "center" })}
`;

export const Wrapper = styled.div<{ hideHeader: boolean }>`
  width: 950px;
  height: 100%;
  padding-top: ${({ hideHeader }) => !hideHeader && "100px"};
  padding-bottom: ${({ hideHeader }) => !hideHeader && "2rem"};
  ${flex({ justifyContent: "center", columnGap: "3.6rem" })}
`;
