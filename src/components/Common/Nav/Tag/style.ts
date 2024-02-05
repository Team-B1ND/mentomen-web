import flex from "@/src/styles/flex";
import getTag from "@/src/utils/Tag/getTag";
import styled, { CSSObject } from "styled-components";
import Image from "next/image";

export const TagContainer = styled.div`
  width: 100%;
  ${flex({ flexDirection: "column" })};

  nav {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;

    padding: 10px 6px 10px;
    font-weight: 400;
    font-size: 17px;
    ${flex({ rowGap: "8px", flexDirection: "column" })};
  }
`;

export const DeveloperIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;

export const LinkStyle: CSSObject = {
  transition: "0.2s all ease-in-out",
  transform: "scale(1)",
  borderRadius: "7px",
  justifyContent: "left",

  "&:hover": {
    backgroundColor: "#eee",
  },
  "&:active": {
    color: "#ddd",
    transform: "scale(0.99)",
  },
};

export const TagItemWrap = styled.div`
  ${flex({ alignItems: "center" })}

  div {
    padding: 3px 10px 3px 10px;
    ${flex({ alignItems: "center", columnGap: "15px" })}
  }
`;

export const TagImg = {
  width: "16px",
  height: "23px",
};

export const TagName = styled.p<{ isSelectTag: boolean; selectTag: string }>`
  height: 30px;

  color: ${({ isSelectTag, selectTag }) =>
    isSelectTag && getTag.getTagColor(selectTag)};
  font-family: "Pretendard-Medium" !important;

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
