import styled from "styled-components";
import { palette } from "../../../style/palette";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 75px;

  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.175);
`;

export const HeaderTitle = styled.img`
  width: 125px;
  height: 40px;

  margin-left: 180px;
  cursor: pointer;
`;

export const HeaderSearchBox = styled.div`
  display: flex;
  width: 600px;
  height: 49px;

  padding: 15px;
  border-radius: 10px;
  background: #f2f2f2;
  border-radius: 10px;
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
  display:flex;
  flex-direction:row;
  margin-right: 180px;
`;

export const HeaderNoticeImg = styled.img`
  width: 35px;
  height: 35px;
  margin-top:2px;
  margin-right:30px;
`;

export const HeaderIntro = styled.h1`
  color: ${palette.color};
  font-weight: 600;
  font-size: 17px;
  line-height: 40px;

  cursor: pointer;
`;
