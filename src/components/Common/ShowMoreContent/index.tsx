import useShowMoreContent from "@/src/hooks/common/useShowMoreContent";
import { CSSObject } from "styled-components";
import * as S from "./style";

interface Props {
  content: string;
  maxHeight: number;
  customStyle?: CSSObject;
}

const ShowMoreContent = ({ content, maxHeight, customStyle }: Props) => {
  const { contentRef, contentHeight, isShowMoreContent, setIsShowMoreContent } =
    useShowMoreContent(content);

  return (
    <S.ContentBox>
      <S.ContentText
        isShowMoreContent={isShowMoreContent}
        maxHeight={maxHeight}
        customstyle={customStyle}
      >
        <p ref={contentRef}>{content}</p>
      </S.ContentText>

      {contentHeight > maxHeight && (
        <S.ShowMoreText onClick={() => setIsShowMoreContent((prev) => !prev)}>
          {isShowMoreContent ? "... 간략히 보기" : "... 더 보기"}
        </S.ShowMoreText>
      )}
    </S.ContentBox>
  );
};

export default ShowMoreContent;
