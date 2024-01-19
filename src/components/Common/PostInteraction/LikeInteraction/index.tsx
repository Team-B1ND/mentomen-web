import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import token from "@/lib/token/token";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled, { CSSObject } from "styled-components";
import * as S from "../style";
import { PostInteractionProps } from "../type";

const LikeInteraction = ({ postId, customStyle }: PostInteractionProps) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      {token.getCookie(ACCESS_TOKEN_KEY) &&
        (isLike ? (
          <FillHeartIcon
            onClick={() => setIsLike(false)}
            customStyle={customStyle!}
          />
        ) : (
          <UnFillHeartIcon
            onClick={() => setIsLike(true)}
            customStyle={customStyle!}
          />
        ))}
    </>
  );
};

export default LikeInteraction;

const UnFillHeartIcon = styled(AiOutlineHeart)<{ customStyle: CSSObject }>`
  ${S.HoverAnimation}
  ${({ customStyle }) => customStyle}
`;

const FillHeartIcon = styled(AiFillHeart)<{ customStyle: CSSObject }>`
  color: #ff3742;
  ${S.HoverAnimation}
  ${({ customStyle }) => customStyle}
`;
