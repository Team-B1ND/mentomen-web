import styled from "styled-components";
import flex from "../../../style/flex";
import { palette } from "../../../style/palette";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 75px;

  ${flex({ alignItems: "center" })}

  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #ddd;

  white-space: nowrap;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 50px 0 20px;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const Logo = styled.img`
  width: 125px;
  height: 40px;
  cursor: pointer;
`;

export const HeaderSearchBox = styled.div`
  ${flex({ alignItems: "center" })}
  padding-left: 15px;
  width: 600px;
  height: 49px;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

export const HeaderSearchImg = styled.img`
  width: 19px;
  height: 19px;
`;

export const HeaderSearchInput = styled.input`
  width: 100%;
  height: 100%;

  padding-left: 10px;
  background: none;
  border: none;
  outline: none;
  font-size: 15px;
`;

export const HeaderAbleContainer = styled.div`
  ${flex({ alignItems: "center", columnGap: "5px" })}
  color: ${palette.color};
  font-weight: 600;
`;

export const RegistText = styled.p`
  ${flex({ alignItems: "center", columnGap: "5px" })}
  cursor: pointer;
`;

export const HeaderNoticeImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const Introduce = styled.h1`
  color: ${palette.color};
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
`;
