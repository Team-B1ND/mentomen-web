import { CustomLink } from "@/src/style/common.style";
import { AiOutlineComment } from "react-icons/ai";
import styled, { CSSObject } from "styled-components";
import * as S from "../style";
import { PostInteractionProps } from "../type";

const CommentInteraction = ({ postId, customStyle }: PostInteractionProps) => {
  return (
    <CustomLink href={`/detail/${postId}`}>
      <CommentIcon customstyle={customStyle!} />
    </CustomLink>
  );
};

export default CommentInteraction;

const CommentIcon = styled(AiOutlineComment)<{ customstyle: CSSObject }>`
  ${S.HoverAnimation}
  ${({ customstyle }) => customstyle}
`;
