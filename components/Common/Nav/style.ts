import getTag from "@/util/Tag/getTag";
import Image from "next/image";
import styled, { css } from "styled-components";
import flex from "../../../style/flex";
import { palette } from "../../../style/palette";

export const AsideContainer = styled.aside`
  width: 266px;
  height: 100vh;
  padding-top: 75px;

  background-color: #fff;
  border-right: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  ${flex({ flexDirection: "column", rowGap: "3.8rem" })};
`;

export const UserInfoContainer = styled.div`
  height: auto;
  padding-top: 20px;
  font-weight: 400;

  ${flex({ alignItems: "center", flexDirection: "column", rowGap: "20px" })}
`;

export const UserProfile = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const UserInfoWrapper = styled.div`
  ${flex({ alignItems: "center", flexDirection: "column", rowGap: "10px" })}
`;

export const UserName = styled.p`
  font-size: 18px;
  color: #000000;
`;

export const UserGrade = styled.p`
  font-size: 16px;
  color: #858585;
`;

export const FiledNav = styled.nav`
  width: 100%;
  height: auto;

  ${flex({ rowGap: "1.5rem", flexDirection: "column" })}

  padding-left: 25px;
  font-weight: 400;
  font-size: 18px;
  list-style: none;

  li {
    cursor: pointer;
  }
`;

const HoverAnimation = css`
  transition: 0.2s all ease-in-out;
  transform: scale(1);
  border-radius: 5px;

  &:hover {
    background-color: #eee;
    transform: scale(0.96);
  }
  &:active {
    color: #ddd;
  }
`;

export const FiledItemWrap = styled.div`
  ${flex({ alignItems: "center" })}

  div {
    width: auto;
    padding: 3px 10px 3px 10px;
    ${HoverAnimation}
    ${flex({ alignItems: "center", columnGap: "15px" })}
  }
`;

export const FiledImg = {
  width: "16px",
  height: "23px",
};

export const FiledName = styled.p<{ isSelectTag: boolean; selectTag: string }>`
  width: auto;
  height: 30px;

  color: ${({ isSelectTag, selectTag }) =>
    isSelectTag && getTag.getTagColor(selectTag)};
  font-weight: 700;

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const MyInfoPathContainer = styled.div`
  font-size: 18px;
  ${flex({ alignItems: "center", justifyContent: "center" })}

  div {
    padding: 7px;
    ${HoverAnimation}
    ${flex({
      alignItems: "center",
      columnGap: "10px",
    })}
  }
`;

export const MyInfoPathText = styled.p`
  cursor: pointer;
`;

export const MyInfoPathImg = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const LogoutText = styled.p`
  font-size: 15px;
  text-align: center;
  color: #858585;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${palette.color};
    font-family: "Pretendard-Bold" !important;
    transform: scale(0.95);
  }
  &:active {
  }
`;
