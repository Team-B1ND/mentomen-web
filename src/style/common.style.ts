import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 3rem;
  padding-bottom: 3rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  overflow-y: auto;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 2.5rem;
`;
