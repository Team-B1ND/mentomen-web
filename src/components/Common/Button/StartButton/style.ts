import styled from "styled-components";

export const StartBtn = styled.button`
  background-color: #2745f2;
  border: none;
  outline: none;

  width: 200px;
  height: 60px;

  color: #fff;
  border-radius: 8px;
  font-size: 20px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;
