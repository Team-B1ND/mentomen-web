import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import flex from "@/style/flex";
import styled from "styled-components";

export const Container = styled.div`
  width: 118px;
  height: 85px;

  font-size: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;

  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.1);
  z-index: 2;
  font-size: 15px;

  position: absolute;
  top: 0;
  left: 0;

  ${flex({ flexDirection: "column", justifyContent: "center" })}
`;

export const Button = styled.button`
  width: 100%;
  height: 41.5%;

  cursor: pointer;
  color: #0f0f0f;
  font-size: 14px;
  padding-left: 18px;

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

  ${flex({ alignItems: "center", columnGap: "14px" })}
`;

export const EditIcon = styled(AiOutlineEdit)`
  width: 23px;
  height: 23px;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 22px;
  height: 22px;
`;
