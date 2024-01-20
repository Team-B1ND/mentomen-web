import flex from "@/src/style/flex";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 70%;
  height: 450px;

  background-color: #000;
  border-radius: 5px;

  overflow: hidden;
  border: 1px solid #ddd;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
