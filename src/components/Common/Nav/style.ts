import styled from "styled-components";
import flex from "../../../style/flex";
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

  ${flex({ rowGap: "2rem", flexDirection: "column" })}

  padding-left: 30px;
  font-weight: 400;
  font-size: 18px;

  li {
    cursor: pointer;
  }
`;

export const FiledItemWrap = styled.div`
  width: 100%;
  ${flex({ alignItems: "center", columnGap: "15px" })}
`;

export const FiledImg = styled.img`
  width: 16px;
  height: 23px;
`;

export const FiledName = styled.p<{ isSelectTag: boolean; selectTag: string }>`
  color: ${({ isSelectTag, selectTag }) =>
    isSelectTag ? getTagColor(selectTag) : "#000"};
  font-weight: 700;
  transition: 0.2s all ease-in-out;

  width: auto;
  height: 30px;

  ${flex({ alignItems: "center", justifyContent: "center" })}
  padding: 9px 7px 7px 7px;

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

export const MyInfoPathContainer = styled.div`
  padding-left: 30px;

  ${flex({ alignItems: "center", columnGap: "10px" })}
  font-size: 18px;
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
`;
