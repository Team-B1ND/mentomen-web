import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const UserBox = styled.div`
  width: 100%;
  padding: 14px 12px;
  background-color: #fff;

  border: 1px solid #ddd;
  border-radius: 5px;
  ${Flex({ rowGap: "7px" })}
`;

export const UserWrap = styled.div`
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
  ${Flex({ flexDirection: "column", alignItems: "center", columnGap: "10px" })}
`;

export const ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const ProfileContent = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  ${Flex({ flexDirection: "column", rowGap: "13px" })}
`;

export const UserClassInfo = styled.p`
  color: #64748b;
  font-size: 14px;
`;

export const UserName = styled.p`
  font-size: 18px;
  color: #0f172a;
  font-family: "Pretendard-Bold" !important;

  span {
    font-size: 15px;
  }
`;

export const CountOfMyPostText = styled.p`
  font-size: 13px;
  color: #64748b;
  span {
    font-family: "Pretendard-Bold" !important;
  }
`;

export const MyRequestMentorArticleWrap = styled.div`
  width: 100%;
  padding: 6px 3px 0 3px;
  font-size: 13px;
  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const Logout = styled.p`
  color: #ff3742;
  text-align: left;

  cursor: pointer;
  font-family: "Pretendard-Bold" !important;

  transition: all 0.12s ease-in-out;
  &:active {
    opacity: 0.7;
  }
`;
