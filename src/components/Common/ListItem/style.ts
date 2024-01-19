import styled from "styled-components";
import flex from "@/style/flex";

export const ArticleContainer = styled.article`
  width: 100%;
  height: auto;

  overflow: hidden;
  background-color: #fff;

  border-radius: 7px;
  border: 1px solid #ddd;
  padding: 0 13px 10px;

  ${flex({
    flexDirection: "column",
  })}
`;

export const DateTime = styled.p`
  font-size: 12px;
  font-weight: normal;
`;

export const ImageContainer = styled.div<{ sizeOfImages: number }>`
  width: 100%;
  height: 420px;

  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;

  background-color: ${({ sizeOfImages }) =>
    sizeOfImages && sizeOfImages > 0 ? "#000" : "#eee"};
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
