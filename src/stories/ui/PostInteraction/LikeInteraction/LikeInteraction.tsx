import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import token from "@/src/libs/token/token";
import { useState } from "react";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import styled, { css, CSSObject } from "styled-components";
import * as S from "../style";
import type { PostInteractionProps } from "../type";
import { redirectToDAuthLogin } from "@/src/stories/utils";

export const LikeInteraction = ({
  postId,
  customStyle,
}: PostInteractionProps) => {
  const [isLike, setIsLike] = useState(false);
  const accessToken = token.getCookie(ACCESS_TOKEN_KEY);

  return (
    <>
      {isLike ? (
        <FillHeartIcon
          onClick={() => setIsLike(false)}
          $customstyle={customStyle!}
        />
      ) : (
        <UnFillHeartIcon
          $access_token={accessToken}
          onClick={() =>
            accessToken !== undefined ? setIsLike(true) : redirectToDAuthLogin()
          }
          $customstyle={customStyle!}
        />
      )}
    </>
  );
};

const UnFillHeartIcon = styled(AiOutlineHeart)<{
  $customstyle: CSSObject;
  $access_token: string | undefined;
}>`
  ${({ $access_token }) =>
    $access_token !== undefined &&
    css`
      ${S.HoverAnimation}
    `}
  ${S.IconStyle}
  ${({ $customstyle }) => $customstyle}
`;

const FillHeartIcon = styled(AiFillHeart)<{ $customstyle: CSSObject }>`
  color: #ff3742;
  ${S.HoverAnimation}
  ${S.IconStyle}
  ${({ $customstyle }) => $customstyle}
`;
