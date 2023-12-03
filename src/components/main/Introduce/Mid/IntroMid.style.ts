import styled from "styled-components";
import flex from "../../../../style/flex";

export const SecondSection = styled.div`
  width: 100%;
  height: 100vh;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const SecondSectionWrap = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
`;

export const SecondSectionText = styled.span`
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 90px;
`;

export const SecondSectionStrongText = styled.span`
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  color: #2745f2;
`;
