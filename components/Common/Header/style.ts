import { palette } from "@/style/palette";
import Image from "next/image";
import styled, { css } from "styled-components";
import flex from "../../../style/flex";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 65px;

  ${flex({ alignItems: "center" })}

  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #ddd;
  padding: 0 10px;

  white-space: nowrap;
  z-index: 4;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Wrapper = styled.div`
  width: 950px;
  height: 100%;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
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

export const HeaderAbleContainer = styled.div`
  ${flex({ alignItems: "center", columnGap: "3px" })}
  font-weight: 600;
`;

const HoverAnimation = css`
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
    transform: scale(0.93);
  }
  &:active {
    background-color: #eee;
  }
`;

export const SearchIcon = styled(Image)<{ isactivesearch: string }>`
  width: 34px;
  height: 35px;
  padding: 8px;
  background-color: ${({ isactivesearch }) =>
    isactivesearch === "true" && "#ddd"};
  ${HoverAnimation}
`;

export const NoticeIcon = styled(Image)<{ isactivenotice: string }>`
  width: 34px;
  height: 35px;
  background-color: ${({ isactivenotice }) =>
    isactivenotice === "/notification" && "#ddd"};
  ${HoverAnimation}
`;

export const ProfileIcon = styled(Image)<{ isactivemypage: string }>`
  width: 35px;
  height: 35px;

  border-radius: 4rem;
  border: ${({ isactivemypage }) =>
    isactivemypage === "/mypage"
      ? `2px solid ${palette.color}`
      : "1px solid #ddd"};
  margin: 0 2px 0 5px;

  cursor: pointer;
  overflow: hidden;

  transition: all 0.15s ease-in-out;
  &:active {
    border: 2px solid ${palette.color};
  }
`;

export const MenToRequestText = styled.p<{ isActivePostForm: boolean }>`
  ${flex({ alignItems: "center", columnGap: "5px" })}
  border-radius: 5px;
  padding: 7px;
  font-size: 17px;
  background-color: ${({ isActivePostForm }) => isActivePostForm && "#ddd"};
  ${HoverAnimation};
`;

export const StartMenToMen = styled.h1`
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;

  padding: 5px;

  transform: scale(1);
  transition: all 0.14s ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;
