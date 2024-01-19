import flex from "@/style/flex";
import styled, { css, CSSObject } from "styled-components";

export const ContentBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  ${flex({ flexDirection: "column", rowGap: "6px" })}
`;

export const ContentText = styled.div<{
  isShowMoreContent: boolean;
  maxHeight: number;
  customstyle?: CSSObject;
}>`
  max-height: ${({ isShowMoreContent, maxHeight }) =>
    isShowMoreContent ? "auto" : `${maxHeight}px`};
  overflow: hidden;
  font-size: 14.5px;

  white-space: pre-wrap;
  word-break: break-word;
  line-height: 22px;

  p {
    width: 100%;
    height: 100%;
  }

  ${({ customstyle }) => customstyle};
`;

export const ShowMoreText = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: #64748b;
  font-family: "Pretendard-Medium" !important;
`;
