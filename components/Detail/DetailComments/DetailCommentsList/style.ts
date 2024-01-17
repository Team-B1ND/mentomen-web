import flex from "@/style/flex";
import Image from "next/image";
import { RxDotsVertical } from "react-icons/rx";
import styled, { CSSObject } from "styled-components";

export const Container = styled.ul`
  width: 100%;
  height: auto;
  min-height: 300px;
  padding-top: 10px;
  ${flex({ flexDirection: "column", rowGap: "30px" })}
`;

export const CommentsList = styled.li`
  width:100%:
  height:auto;
  ${flex({ columnGap: "15px" })}
`;

export const ProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const CommentContent = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  padding-top: 3px;
  ${flex({ columnGap: "5px" })}
`;

export const CommenterInfoWrap = styled.div`
  width: calc(100% - 30px);
  ${flex({ flexDirection: "column", rowGap: "8px" })};
`;

export const CommenterInfo = styled.div`
  ${flex({ alignItems: "flex-end", columnGap: "5px" })}
`;

export const CommenterNameAndClass = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Bold" !important;
`;

export const CommentUpadateTimeText = styled.p`
  font-size: 12px;
  color: #606060;
  font-family: "Pretendard-Medium" !important;
`;

export const CommentText = styled.p`
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 15px;
  line-height: 22px;
`;

export const DotsIconContainer = styled.div`
  width: 30px;
  position: relative;
  ${flex({
    flexDirection: "column",
    rowGap: "5px",
    alignItems: "end",
  })}
`;

export const DotsIcon = styled(RxDotsVertical)<{
  customstyle?: CSSObject;
}>`
  width: 30px;
  height: 30px;

  border-radius: 20px;
  padding: 6px;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.93);
    background-color: #ddd;
  }

  ${({ customstyle }) => customstyle};
`;
