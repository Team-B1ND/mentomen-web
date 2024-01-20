import flex from "@/src/styles/flex";
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

export const PostArticle = styled.article`
  width: 100%;
  height: auto;
  min-height: 150px;

  border: 1px solid #ddd;
  border-radius: 10px;

  padding: 16px;
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
  padding-left: 63px;
  padding-right: 23px;
  ${flex({ flexDirection: "column", rowGap: "4px" })}
`;

export const IconContainer = styled.div`
  padding-top: 5px;
  ${flex({ alignItems: "center", columnGap: "5px" })}
`;

export const InteractionStyle = {
  width: "25px",
  height: "25px",
};
