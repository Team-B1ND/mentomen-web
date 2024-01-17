import flex from "@/style/flex";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  heigth: 100%;

  ${flex({
    justifyContent: "center",
  })}
`;

export const Wrapper = styled.div`
  width: 95%;
  height: auto;
`;

export const DetailItemContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  ${flex({ flexDirection: "column", alignItems: "center" })}
`;

export const PostArticle = styled.article<{ sizeOfImage: string[] }>`
  width: 100%;
  height: auto;
  min-height: 150px;

  border: 1px solid #ddd;
  border-radius: 10px;

  padding: 16px;
  padding-bottom: ${({ sizeOfImage }) => sizeOfImage !== null && "25px"};
  background-color: #fff;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: auto;
  ${flex({ flexDirection: "column", rowGap: "2px" })}
`;

export const PostContent = styled.div`
  width: 100%;
  height: auto;
  padding-left: 58px;
  padding-right: 23px;
  ${flex({ flexDirection: "column" })}
`;

export const Content = styled.div`
  width: 100%;
  height: auto;

  white-space: pre-wrap;
  word-break: break-word;
  line-height: 23px;
  font-size: 17px;
`;
