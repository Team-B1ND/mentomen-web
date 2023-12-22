import styled from "styled-components";

export const StartBtn = styled.button`
  background-color: #2745f2;
  border: none;
  outline: none;

  width: 220px;
  height: 70px;

  color: #fff;
  border-radius: 8px;
  font-size: 20px;

  cursor: pointer;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.98);
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #2759f2;
  }

  &:active {
    background-color: #2767f2;
  }
`;
