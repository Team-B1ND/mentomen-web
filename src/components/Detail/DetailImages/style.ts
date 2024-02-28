import { Flex } from "@/src/stories/layout";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 65%;
  height: 420px;

  background-color: #000;
  border-radius: 5px;

  overflow: hidden;
  border: 1px solid #ddd;
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;
