import styled from "styled-components";
import flex from "../../../../style/flex";
import Image from "next/image";

export const ThirdSection = styled.div`
  width: 100%;
  height: 100vh;
  ${flex({ alignItems: "center", justifyContent: "center", columnGap: "5rem" })}
`;

export const ThirdSectionWrap = styled.div`
  ${flex({ flexDirection: "column", rowGap: "4rem" })}
  font-size: 40px;
`;

export const ThirdSectionText = styled.p`
  font-weight: 700;
  font-size: 50px;
  color: #2745f2;
`;

export const ThirdSectionSubTextContainer = styled.div`
  ${flex({ flexDirection: "column", rowGap: "1rem" })}
`;

export const ThirdSectionText1 = styled.p`
  font-weight: 600;
  font-size: 50px;
  color: #000;
`;

export const ThirdSectionImg = styled(Image)`
  width: 500px;
  height: 700px;

  margin-top: 7rem;
`;

export const ThirdSectionText2 = styled.p``;
