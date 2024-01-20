import styled from "styled-components";
import flex from "@/src/styles/flex";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 1);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Wrapper = styled.div`
  width: 350px;
  height: 100px;

  background-color: #fff;
  border: 2px solid #ddd;

  border-radius: 10px;
  font-size: 17px;
  overflow: hidden;
`;

export const TextBox = styled.div<{ isDelete?: boolean }>`
  width: 100%;
  height: 50%;

  ${flex({
    alignItems: "center",
    justifyContent: "center",
    columnGap: "10px",
  })}

  p {
    font-family: "Pretendard-Medium" !important;
  }

  cursor: pointer;
  border-top: ${({ isDelete }) => isDelete && "1px solid #ddd"};

  transition: all 0.1s ease-in-out;
  &:hover {
    color: ${({ isDelete }) => (isDelete ? "#ff3b30" : "#007aff")}; // #007aff
  }
  &:active {
    background-color: #eee;
  }
`;

export const EditIcon = styled(AiOutlineEdit)`
  width: 23px;
  height: 23px;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 22px;
  height: 22px;
`;
