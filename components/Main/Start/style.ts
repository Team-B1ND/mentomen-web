import Image from "next/image";
import styled from "styled-components";
import flex from "../../../style/flex";
import { palette } from "../../../style/palette";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  color: ${palette.color};
  ${flex({ alignItems: "center", justifyContent: "center" })}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 2s;
`;

export const Wrapper = styled.div`
  height: 700px;
  ${flex({ justifyContent: "center", columnGap: "5rem" })}
`;

export const Introduce = styled.div`
  padding-top: 2rem;
  ${flex({ flexDirection: "column", rowGap: "3rem" })}
`;

export const TextWrap = styled.div`
  ${flex({ flexDirection: "column", rowGap: "25px" })}
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 50px;
`;

export const MidText = styled.p`
  font-weight: 700;
  font-size: 30px;
`;

export const iPhoneImage = styled(Image)`
  width: 482px;
  height: 100%;
`;
