import styled, { css } from "styled-components";
import { Flex } from "../../layout";

export const Nav = styled.nav`
  ${Flex({ alignItems: "center", columnGap: "7px" })}
`;

export const Li = styled.li`
  width: 45px;
  height: 45px;

  font-size: 17px;
  list-style: none;
  cursor: pointer;
  border-radius: 100%;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  &[aria-current] {
    background-color: #29275c;
    font-weight: bold;
    cursor: revert;
    color: #fff;
    transform: revert;
  }

  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #29275c;
    color: #fff;
  }
`;

export const Arrow = styled.div<{ $disabled?: boolean }>`
  cursor: pointer;
  ${({ $disabled }) =>
    $disabled &&
    css`
      color: gray;
      cursor: revert;
      transform: revert;
    `}
`;
