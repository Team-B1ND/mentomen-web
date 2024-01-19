import flex from "@/style/flex";
import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 100vh;

  background-color: #fff;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;

  padding-bottom: 2rem;
  ${flex({ flexDirection: "column", alignItems: "center" })}
`;

export const Content = styled.div`
  width: 80%;
  height: calc(100% - 60px);

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  padding-top: 40px;
  ${flex({ flexDirection: "column" })}
`;
