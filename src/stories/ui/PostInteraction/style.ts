import { css } from "styled-components";

export const IconStyle = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const HoverAnimation = css`
  transition: all 0.13s ease-out;
  transform: scale(1);

  &:hover {
    opacity: 0.5;
  }
  &:active {
    transform: scale(0.95);
  }
`;
