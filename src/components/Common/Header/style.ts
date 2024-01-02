import styled, { css } from "styled-components";
import flex from "../../../style/flex";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 75px;

  ${flex({ alignItems: "center" })}

  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #ddd;

  white-space: nowrap;
  z-index: 3;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 50px 0 20px;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const Logo = styled.img`
  width: 125px;
  height: 40px;
  cursor: pointer;

  transition: all 0.05s ease-in-out;
  &:active {
    opacity: 0.5;
  }
`;

export const SearchForm = styled.form`
  width: 600px;
  height: 50px;

  border-radius: 10px;
  padding-left: 15px;
  background-color: #f2f2f2;

  ${flex({ alignItems: "center" })}
`;

const HoverAnimation = css`
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
    transform: scale(0.93);
  }
  &:active {
    background-color: #eee;
  }
`;

export const SearchButton = styled.button`
  padding: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;

  ${HoverAnimation}
  ${flex({ alignItems: "center" })};
`;

export const SearchIcon = styled.img`
  width: 19px;
  height: 19px;
`;

export const SearchInput = styled.input`
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
  font-weight: 600;
`;

export const WrtieText = styled.p`
  ${flex({ alignItems: "center", columnGap: "5px" })}
  cursor: pointer;
  border-radius: 5px;
  padding: 7px;
  font-size: 17px;
  ${HoverAnimation}
`;

export const HeaderNoticeImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  ${HoverAnimation}
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
