import Link from "next/link";
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
  height: auto;
`;

export const NonePostText = styled.div`
  width: 550px;
  height: 620px;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const CustomLink = styled(Link)<{ customstyle?: CSSObject }>`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  ${flex({ alignItems: "center", justifyContent: "center" })};
  ${({ customstyle }) => customstyle}
`;
