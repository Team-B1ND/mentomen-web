import styled from "styled-components";
import BackImg from "../../../../assets/images/BackImg.png";
import flex from "../../../../style/flex";

export const FirstSection = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url(${BackImg});

  ${flex({
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: "4rem",
  })}
`;

export const FirstSectionTitle = styled.span`
  font-weight: 700;
  font-size: 62px;
`;

export const SecondSectionWrap = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center", rowGap: "15px" })}
`;

export const SecondSectionText = styled.span`
  font-size: 30px;
  font-weight: 500;
  font-family: "Pretendara-Bold" !important;
`;

export const SecondSectionStrongText = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #2745f2;
  font-family: "Pretendara-Bold" !important;
`;
