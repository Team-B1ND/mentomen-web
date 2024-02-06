import Link from "next/link";
import { RxDotsVertical } from "react-icons/rx";
import styled, { CSSObject } from "styled-components";
import flex from "./flex";

export const ListContainer = styled.main`
  width: 550px;
  height: 100%;
  flex-wrap: wrap;

  ${flex({
    flexDirection: "column",
    alignItems: "center",
  })}
`;

export const ListWrapper = styled.div`
  width: 100%;
  ${flex({ alignItems: "center", flexDirection: "column", rowGap: "25px" })}
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const NoneDataText = styled.div`
  width: 550px;
  height: 620px;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const CustomLink = styled(Link)<{ customstyle?: CSSObject }>`
  color: #000;
  text-decoration: none;

  user-drag: none;
  cursor: pointer;
  ${flex({ alignItems: "center", justifyContent: "center" })};
  ${({ customstyle }) => customstyle}
`;

export const DotsIconContainer = styled.div`
  width: 30px;
  position: relative;
`;

export const DotsIcon = styled(RxDotsVertical)<{
  customstyle?: CSSObject;
}>`
  width: 30px;
  height: 30px;

  border-radius: 20px;
  padding: 6px;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.93);
    background-color: #ddd;
  }

  ${({ customstyle }) => customstyle};
`;
