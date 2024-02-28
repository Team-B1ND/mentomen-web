import type { CSSProperties } from "react";
import { css } from "styled-components";

interface Props {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  columnGap?: CSSProperties["columnGap"];
  rowGap?: CSSProperties["rowGap"];
  gap?: CSSProperties["gap"];
}

export const Flex = ({
  flexDirection,
  justifyContent,
  alignItems,
  columnGap,
  rowGap,
  gap,
}: Props) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    column-gap: ${columnGap};
    row-gap: ${rowGap};
    gap: ${gap};
  `;
};
