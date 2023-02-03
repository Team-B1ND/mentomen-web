import styled from "styled-components";
import { palette } from "../../../style/palette";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.175);
`;

export const HeaderTitle = styled.img`
  width: 125px;
  height: 40px;

  margin-left: 180px;
  margin-top: 8px;

  cursor: pointer;
`;

export const HeaderSearchBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  column-gap: 10px;

  box-sizing: border-box;
  border-radius: 10px;
  padding: 6px 12px 6px 5px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-left: 300px;
`;

export const HeaderSearchImg = styled.img`
  width: 19px;
  height: 19px;
`;

export const HeaderSearchInput = styled.input`
  height: 20px;
  width: 300px;
  background: #f2f2f2;
  border: 0px;
  outline: none;

  font-size: 15px;
`;

export const HeaderIntro = styled.h1`
  margin-left: 400px;
  margin-top: 20px;
  color: ${palette.color}
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;

  cursor: pointer;
`;
