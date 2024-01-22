import styled from "styled-components";
import flex from "../../../styles/flex";

export const AsideContainer = styled.aside`
  width: 300px;
  height: 100%;

  ${flex({ flexDirection: "column", rowGap: "35px" })};
`;
