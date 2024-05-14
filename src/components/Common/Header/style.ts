import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 65px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 10px;

  white-space: nowrap;
  z-index: 4;
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Logo = styled(Image)`
  width: 100px;
  height: 32px;
  cursor: pointer;

  transition: all 0.05s ease-in-out;
  &:active {
    opacity: 0.5;
  }
`;

const HoverAnimation = css`
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #eee;
    transform: scale(0.93);
  }
`;

export const SearchIcon = styled(Image)<{ $isActiveSearch: string }>`
  width: 34px;
  height: 35px;
  padding: 8px;
  background-color: ${({ $isActiveSearch }) =>
    $isActiveSearch === "true" && "#ddd"};
  ${HoverAnimation}
`;

export const NoticeIcon = styled(Image)<{ $isActiveNotice: string }>`
  width: 34px;
  height: 35px;
  padding: 5px;
  background-color: ${({ $isActiveNotice }) =>
    $isActiveNotice === "/notification" && "#ddd"};
  ${HoverAnimation}
`;

export const ProfileIcon = styled(Image)<{ $isActiveMyPage: string }>`
  width: 40px;
  height: 40px;

  border-radius: 4rem;
  border: ${({ $isActiveMyPage }) =>
    $isActiveMyPage === "/mypage" ? `2px solid #d9d9d9` : "1px solid #ddd"};
  margin: 0 2px 0 5px;

  cursor: pointer;
  overflow: hidden;

  transition: all 0.15s ease-in-out;
  &:active {
    border: 2px solid #d9d9d9;
  }
`;

export const MenToRequest = styled.div`
  width: 105px;
  height: 40px;
  border-radius: 50px;
  padding: 8px 10px;

  color: #f2f2f2;
  margin-left: 5px;
  font-size: 14px;
  cursor: pointer;

  font-family: "Pretendard-Medium" !important;
  background-color: #2749dc;

  ${Flex({ alignItems: "center", justifyContent: "center" })};
  transition: all 0.1s ease-in-out;
  &:active {
    opacity: 0.8;
  }
`;

export const StartMenToMen = styled.div`
  font-family: "Pretendard-Medium" !important;
  font-size: 17px;

  padding: 8px;
  cursor: pointer;

  transition: all 0.1s ease-in-out;
  &:active {
    opacity: 0.5;
  }
`;
