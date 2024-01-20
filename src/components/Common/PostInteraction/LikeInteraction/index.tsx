import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import token from "@/src/libs/token/token";
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
            customstyle={customStyle!}
          />
        ) : (
          <UnFillHeartIcon
            onClick={() => setIsLike(true)}
            customstyle={customStyle!}
          />
        ))}
    </>
  );
};

export default LikeInteraction;

const UnFillHeartIcon = styled(AiOutlineHeart)<{ customstyle: CSSObject }>`
  ${S.HoverAnimation}
  ${({ customstyle }) => customstyle}
`;

const FillHeartIcon = styled(AiFillHeart)<{ customstyle: CSSObject }>`
  color: #ff3742;
  ${S.HoverAnimation}
  ${({ customstyle }) => customstyle}
`;
