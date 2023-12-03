import styled from "styled-components";
import BackImg from "../../../../assets/images/BackImg.png";
import flex from "../../../../style/flex";
export const FirstSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackImg});
  ${flex({ justifyContent: "center" })}
`;

export const FirstSectionTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 62px;
  margin-top: 300px;
`;
