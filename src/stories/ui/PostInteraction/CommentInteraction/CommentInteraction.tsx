import { GoogleAnalyzer } from "@/src/stories/utils";
import { CustomLink } from "@/src/stories/styles";
import { AiOutlineComment } from "@react-icons/all-files/ai/AiOutlineComment";
import styled, { CSSObject } from "styled-components";
import * as S from "../style";
import { PostInteractionProps } from "../type";

export const CommentInteraction = ({
  postId,
  customStyle,
}: PostInteractionProps) => {
  const pageView = new GoogleAnalyzer().pageView;
  const link = `/detail/${postId}`;

  return (
    <CustomLink href={link}>
      <CommentIcon customstyle={customStyle!} onClick={() => pageView(link)} />
    </CustomLink>
  );
};

const CommentIcon = styled(AiOutlineComment)<{ customstyle: CSSObject }>`
  ${S.HoverAnimation}
  ${S.IconStyle}
  ${({ customstyle }) => customstyle}
`;
