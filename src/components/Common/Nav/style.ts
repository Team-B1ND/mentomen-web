import styled, { css } from "styled-components";
import flex from "../../../style/flex";
import { palette } from "../../../style/palette";
import { getTagColor } from "../../../util/Tag/getTagColor";

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  padding-top: 75px;
  background-color: #fff;

  ${flex({ flexDirection: "column", rowGap: "3.8rem" })}
  border-right: 1px solid #ddd;
`;

export const UserInfoContainer = styled.div`
  height: auto;
  padding-top: 20px;
  font-weight: 400;

  ${flex({ alignItems: "center", flexDirection: "column", rowGap: "20px" })}
`;

export const UserProfile = styled.img`
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

export const FiledUl = styled.ul`
  width: 100%;
  height: auto;

  ${flex({ rowGap: "1.5rem", flexDirection: "column" })}

  padding-left: 25px;
  font-weight: 400;
  font-size: 18px;

  li {
    cursor: pointer;
  }
`;

const HoverAnimation = css`
  transition: 0.2s all ease-in-out;
  transform: scale(1);
  &:hover {
    background-color: #eee;
    border-radius: 5px;
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

export const FiledImg = styled.img`
  width: 16px;
  height: 23px;
`;

export const FiledName = styled.p<{ isSelectTag: boolean; selectTag: string }>`
  width: auto;
  height: 30px;

  color: ${({ isSelectTag, selectTag }) =>
    isSelectTag && getTagColor(selectTag)};
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

export const MyInfoPathImg = styled.img`
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
