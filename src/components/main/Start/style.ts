import styled from "styled-components";
import flex from "../../../style/flex";
import { palette } from "../../../style/palette";

export const StartContainer = styled.div`
  width: 100%;
  height: calc(100vh - 75px);

  padding-top: 5rem;
  color: ${palette.color};
  ${flex({ justifyContent: "center", columnGap: "6rem" })}
`;

export const StartLeftWrap = styled.div`
  padding-top: 3rem;
  ${flex({ flexDirection: "column", rowGap: "5rem" })}
`;

export const StartTextWrap = styled.div`
  ${flex({ flexDirection: "column", rowGap: "25px" })}
`;

export const StartText = styled.p`
  font-weight: 700;
  font-size: 50px;
`;

export const StartMidText = styled.p`
  font-weight: 700;
  font-size: 30px;
`;

export const StartImg = styled.img`
  width: 482px;
  height: 700px;
`;
