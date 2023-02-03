import styled from "styled-components";

export const ListSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;

  box-shadow: 0px 4px 8px rgba(190, 190, 190, 0.2);
  border-radius: 5px;
`;
export const ListSectionWrap = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: none;
  padding-bottom: 40px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const ListContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  display: flex;
`;
