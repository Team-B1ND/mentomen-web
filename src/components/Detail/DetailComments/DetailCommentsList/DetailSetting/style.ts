import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import flex from "@/src/styles/flex";
import styled from "styled-components";

export const Button = styled.button`
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
