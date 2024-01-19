import { css } from "styled-components";

export const HoverAnimation = css`
  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: all 0.13s ease-out;
  transform: scale(1);

  &:hover {
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.95);
  }
`;
