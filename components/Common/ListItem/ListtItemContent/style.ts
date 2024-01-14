import { AiOutlineShareAlt } from "react-icons/ai";
import flex from "@/style/flex";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin-top: 6px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 1px;

  white-space: pre-wrap;
  line-height: 21px;
  font-size: 15px;

  color: #858585;
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
  width: 30px;
  height: 30px;
  ${HoverAnimation}
`;

export const UnFillHeartIcon = styled(AiOutlineHeart)`
  width: 30px;
  height: 30px;
  ${HoverAnimation}
`;

export const FillHeartIcon = styled(AiFillHeart)`
  width: 30px;
  height: 30px;
  color: #ff3742;
  ${HoverAnimation}
`;

export const ShareIcon = styled(AiOutlineShareAlt)`
  width: 30px;
  height: 30px;
  ${HoverAnimation}
`;

export const UploadDateTime = styled.p`
  color: #858585;
  font-size: 14px;
`;
