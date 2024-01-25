import styled from "styled-components";
import flex from "../../../styles/flex";

export const AsideContainer = styled.aside`
  width: 300px;
  height: 100%;

  position: sticky;
  top: 100px;

  ${flex({ flexDirection: "column", rowGap: "28px" })};
`;
