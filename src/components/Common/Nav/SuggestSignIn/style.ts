import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const SuggestSignInBox = styled.div`
  width: 100%;
  height: 80px;

  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;

  overflow: hidden;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  button {
    width: 100%;
    height: 100%;

    outline: none;
    border: none;

    background-color: #fff;
    cursor: pointer;

    &:active {
      opacity: 0.6;
    }

    ${Flex({
      alignItems: "center",
      justifyContent: "center",
      columnGap: "4px",
    })}
  }
`;

export const MenToMenIcon = styled(Image)`
  width: 26px;
  height: 26px;
`;

export const MenToMenStartText = styled.p`
  font-size: 18px;
  font-family: "Pretendard-Bold" !important;
  color: #29275c;
`;
