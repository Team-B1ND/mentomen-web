import { AiOutlineShareAlt } from "react-icons/ai";
import flex from "@/style/flex";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 6px;
`;

export const EtcContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding-right: 5px;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const IconContainer = styled.div`
  ${flex({ alignItems: "center", columnGap: "8px" })}
`;

const HoverAnimation = css`
  width: 27px;
  height: 27px;

  cursor: pointer;
  transition: all 0.13s ease-out;
  transform: scale(1);

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CommentIcon = styled(AiOutlineComment)`
  ${HoverAnimation}
`;

export const UnFillHeartIcon = styled(AiOutlineHeart)`
  ${HoverAnimation}
`;

export const FillHeartIcon = styled(AiFillHeart)`
  color: #ff3742;
  ${HoverAnimation}
`;

export const ShareIcon = styled(AiOutlineShareAlt)`
  ${HoverAnimation}
`;

export const UploadDateTime = styled.p`
  color: #858585;
  font-size: 14px;
`;
