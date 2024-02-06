import { CustomLink } from "@/src/styles/common.style";
import GoogleAnalyzer from "@/src/utils/Analyze/GoogleAnalyzer";
import { AiOutlineComment } from "@react-icons/all-files/ai/AiOutlineComment";
import styled, { CSSObject } from "styled-components";
import * as S from "../style";
import { PostInteractionProps } from "../type";

const CommentInteraction = ({ postId, customStyle }: PostInteractionProps) => {
  const pageView = GoogleAnalyzer.pageView;
  const link = `/detail/${postId}`;

  return (
    <CustomLink href={link}>
      <CommentIcon customstyle={customStyle!} onClick={() => pageView(link)} />
    </CustomLink>
  );
};

export default CommentInteraction;

const CommentIcon = styled(AiOutlineComment)<{ customstyle: CSSObject }>`
  ${S.HoverAnimation}
  ${S.IconStyle}
  ${({ customstyle }) => customstyle}
`;
