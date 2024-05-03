import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled from "styled-components";

export const NoticeItemBox = styled.article`
  width: 100%;
  min-height: 95px;

  border-bottom: 1px solid #cbd5e1;
  padding-top: 7px;
  padding-bottom: 15px;

  ${Flex({ columnGap: "15px" })}
`;

export const ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 4rem;
  border: 1px solid #cbd5e1;
`;

export const SenderWrap = styled.div`
  font-size: 15px;
  color: #0f172a;
`;

export const SenderMessage = styled.span`
  font-size: 15px;
  color: #0f172a;
  padding-bottom: 3px;
  span {
    font-size: 16px;
    font-family: "Pretendard-Bold" !important;
  }

  transition: all 0.1s ease-in-out;
  border-bottom: 1px solid #f4f4f4;
  &:hover {
    border-bottom: 1px solid #d9d9d9;
  }
  &:active {
    color: #626262;
  }
`;

export const SenderComment = styled.p`
  font-size: 15px;
  color: #334155;
  font-family: "Pretendard-Bold" !important;
  line-height: 20px;
`;

export const CommentUpdateDate = styled.p`
  font-size: 14px;
  color: #64748b;
`;
