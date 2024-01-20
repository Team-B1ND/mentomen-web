import { useSharePost } from "@/hooks/RequestMentor/useSharePost";
import { AiOutlineShareAlt } from "react-icons/ai";
import styled, { CSSObject } from "styled-components";
import * as S from "../style";
import { PostInteractionProps } from "../type";

const ShareInteraction = ({ postId, customStyle }: PostInteractionProps) => {
  const { handleSharePostClick } = useSharePost();
  return (
    <ShareIcon
      onClick={() => handleSharePostClick(postId)}
      customstyle={customStyle!}
    />
  );
};

export default ShareInteraction;

const ShareIcon = styled(AiOutlineShareAlt)<{ customstyle: CSSObject }>`
  ${S.HoverAnimation}
  ${({ customstyle }) => customstyle}
`;
