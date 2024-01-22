import styled, { CSSObject } from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import flex from "@/src/styles/flex";

export const Container = styled.div<{ customstyle?: CSSObject }>`
  width: 118px;
  height: 85px;

  font-size: 15px;
  background-color: #fff;
  border-radius: 8px;

  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.15);
  z-index: 2;
  font-size: 15px;

  position: absolute;
  top: 0;
  left: 0;

  ${flex({ flexDirection: "column", justifyContent: "center" })}
  ${({ customstyle }) => customstyle};
`;

export const Button = styled.button<{ buttonType: "MODIFY" | "DELETE" }>`
  width: 100%;
  height: 41.5%;

  cursor: pointer;
  color: #0f0f0f;
  font-size: 14px;
  padding-right: 10px;

  outline: none;
  border: none;
  background-color: transparent;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
    transition: all 0s ease-in-out;
    color: ${({ buttonType }) =>
      buttonType === "MODIFY" ? "#007aff" : "#ff3b30"};
  }

  ${flex({ alignItems: "center", justifyContent: "center", columnGap: "14px" })}
`;

export const EditIcon = styled(AiOutlineEdit)`
  width: 23px;
  height: 23px;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 22px;
  height: 22px;
`;
