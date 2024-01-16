import flex from "@/style/flex";
import getTag from "@/util/Tag/getTag";
import styled from "styled-components";
import css from "styled-jsx/css";
import Image from "next/image";

export const TagContainer = styled.div`
  width: 100%;
  height: auto;

  ${flex({ flexDirection: "column" })};

  nav {
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #ddd;

    padding: 10px 6px 10px;
    font-weight: 400;
    font-size: 17px;
    list-style: none;
    ${flex({ rowGap: "10px", flexDirection: "column" })};

    li {
      cursor: pointer;
    }
  }
`;

export const DeveloperIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;

export const TagItemWrap = styled.div`
  ${flex({ alignItems: "center" })}

  div {
    width: auto;
    padding: 3px 10px 3px 10px;
    ${flex({ alignItems: "center", columnGap: "15px" })}

    transition: 0.2s all ease-in-out;
    transform: scale(1);
    border-radius: 5px;

    &:hover {
      background-color: #eee;
      transform: scale(0.96);
    }
    &:active {
      color: #ddd;
    }
  }
`;

export const TagImg = {
  width: "16px",
  height: "23px",
};

export const TagName = styled.p<{ isSelectTag: boolean; selectTag: string }>`
  width: auto;
  height: 30px;

  color: ${({ isSelectTag, selectTag }) =>
    isSelectTag && getTag.getTagColor(selectTag)};
  font-family: "Pretendard-Medium" !important;

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
