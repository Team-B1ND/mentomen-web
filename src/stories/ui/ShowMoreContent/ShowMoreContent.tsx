import styled, { CSSObject } from "styled-components";
import { useShowMoreContent } from "../../hooks";
import { Flex } from "../../layout";

interface Props {
  content: string;
  maxHeight: number;
  customStyle?: CSSObject;
}

export const ShowMoreContent = ({ content, maxHeight, customStyle }: Props) => {
  const { contentRef, contentHeight, isShowMoreContent, setIsShowMoreContent } =
    useShowMoreContent(content);

  return (
    <ContentBox>
      <ContentText
        isShowMoreContent={isShowMoreContent}
        maxHeight={maxHeight}
        customstyle={customStyle}
      >
        <p ref={contentRef}>{content}</p>
      </ContentText>

      {contentHeight > maxHeight && (
        <ShowMoreText
          isShowMoreContent={isShowMoreContent}
          onClick={() => setIsShowMoreContent((prev) => !prev)}
        >
          {isShowMoreContent ? "... 간략히 보기" : "... 더 보기"}
        </ShowMoreText>
      )}
    </ContentBox>
  );
};

const ContentBox = styled.div`
  width: 100%;
  padding: 6px 0 10px 0;
  ${Flex({ flexDirection: "column", rowGap: "6px" })}
`;

const ContentText = styled.div<{
  isShowMoreContent: boolean;
  maxHeight: number;
  customstyle?: CSSObject;
}>`
  max-height: ${({ isShowMoreContent, maxHeight }) =>
    isShowMoreContent ? "auto" : `${maxHeight}px`};
  overflow: hidden;
  font-size: 14.5px;
  line-height: 18px;

  p {
    width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }

  ${({ customstyle }) => customstyle};
`;

const ShowMoreText = styled.p<{ isShowMoreContent: boolean }>`
  width: ${({ isShowMoreContent }) => (isShowMoreContent ? "80px" : "55px")};

  cursor: pointer;
  color: #64748b;

  font-size: 14px;
  font-family: "Pretendard-Medium" !important;
`;
