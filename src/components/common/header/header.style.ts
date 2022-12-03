import styled from "styled-components";
import { palette } from "../../../style/palette";

export const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.175);
`;

export const Title = styled.img`
  width: 125px;
  height: 40px;

  margin-left: 230px;
  margin-top: 8px;

  cursor: pointer;
`;

export const SearchBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  column-gap: 10px;
  margin-right: -10px;

  box-sizing: border-box;
  border-radius: 10px;
  padding: 6px 12px 6px 5px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-left: 300px;
`;

export const SearchImg = styled.img`
  width: 19px;
  height: 19px;
`;

export const SearchInput = styled.input`
  height: 20px;
  width: 300px;
  background: #f2f2f2;
  border: 0px;
  outline: none;

  font-size: 15px;
`;

export const Intro = styled.h1`
  margin-left: 500px;
  margin-top: 15px;
  color: ${palette.color}
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;

  cursor: pointer;
`;
