import styled from "styled-components";
import flex from "../../../../style/flex";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #ddd;

  border-radius: 10px;
  font-size: 18px;
  overflow: hidden;
`;

export const TextBox = styled.div<{ isDelete?: boolean }>`
  width: 100%;
  height: 50%;

  ${flex({
    alignItems: "center",
    justifyContent: "center",
  })}

  cursor: pointer;
  border-top: ${({ isDelete }) => isDelete && "1px solid #ddd"};

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;
