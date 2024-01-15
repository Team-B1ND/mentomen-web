import { AiOutlineShareAlt } from "react-icons/ai";
import flex from "@/style/flex";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 6px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 1px;
  ${flex({ flexDirection: "column", rowGap: "6px" })}
`;

export const ContentText = styled.p<{ isShowMoreContent: boolean }>`
  max-height: ${({ isShowMoreContent }) =>
    isShowMoreContent ? "auto" : "66px"};
  overflow: hidden;

  white-space: pre-wrap;
  word-break: break-all;
  line-height: 22px;
  font-size: 14.5px;
`;

export const ShowMoreText = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: #64748b;
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
