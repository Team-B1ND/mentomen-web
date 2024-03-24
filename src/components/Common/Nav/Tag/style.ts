import styled, { CSSObject } from "styled-components";
import Image from "next/image";
import { Flex } from "@/src/stories/layout";
import { GetTag } from "@/src/stories/utils";

export const TagContainer = styled.article`
  width: 100%;
  ${Flex({ flexDirection: "column" })};

  nav {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;

    padding: 10px 6px 10px;
    font-weight: 400;
    font-size: 17px;
    ${Flex({ rowGap: "8px", flexDirection: "column" })};
  }
`;

export const DeveloperIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;

export const LinkStyle: CSSObject = {
  transition: "0.1s all ease-in-out",
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

export const TagItemWrap = styled.li`
  width: 100%;
  padding: 3px 10px 3px 10px;
  ${Flex({ alignItems: "center", columnGap: "15px" })}
`;

export const TagImg = {
  width: "16px",
  height: "23px",
};

export const TagName = styled.p<{ isSelectTag: boolean; selectTag: string }>`
  height: 30px;

  color: ${({ isSelectTag, selectTag }) =>
    isSelectTag && new GetTag().getTagColor(selectTag)};
  font-family: "Pretendard-Medium" !important;

  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;
