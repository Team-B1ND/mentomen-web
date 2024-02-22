import { useSharePost } from "./hooks";
import { AiOutlineShareAlt } from "@react-icons/all-files/ai/AiOutlineShareAlt";
import styled, { CSSObject } from "styled-components";
import * as S from "../style";
import { PostInteractionProps } from "../type";

const ShareInteraction = ({ postId, customStyle }: PostInteractionProps) => {
  const { handleSharePostClick } = useSharePost();
  return (
    <ShareIcon
      onClick={() => handleSharePostClick(postId)}
      customstyle={customStyle!}
      title="클립보드 복사"
    />
  );
};

export default ShareInteraction;

const ShareIcon = styled(AiOutlineShareAlt)<{ customstyle: CSSObject }>`
  ${S.HoverAnimation}
  ${S.IconStyle}
  ${({ customstyle }) => customstyle}
`;
