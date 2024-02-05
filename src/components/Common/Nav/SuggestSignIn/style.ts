import flex from "@/src/styles/flex";
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

  padding: 0 15px;
  ${flex({ alignItems: "center", justifyContent: "center" })}

  button {
    width: 100%;
    height: 55px;

    border-radius: 5px;
    outline: none;
    border: none;

    background-color: #f8fbfc;
    border: 1px solid #e2e8f0;
    cursor: pointer;

    &:active {
      opacity: 0.6;
    }

    ${flex({
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
  font-size: 16px;
  font-family: "Pretendard-Bold" !important;
  color: #29275c;
`;
