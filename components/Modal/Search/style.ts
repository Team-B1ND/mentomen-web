import flex from "@/style/flex";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 65px;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

const slideInAnimation = keyframes`
  from {
    z-index: 2;
    transform: translateY(-56px);
  }
  to {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 85px;

  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  animation: ${slideInAnimation} 0.3s ease-in-out;

  ${flex({ justifyContent: "center" })}
`;

export const Form = styled.form`
  width: 950px;
  height: 100%;
  ${flex({ alignItems: "center", columnGap: "10px" })}

  button {
    outline: none;
    border: none;

    background-color: transparent;
  }

  input {
    width: calc(100% - 30px);
    height: 100%;

    outline: none;
    border: none;

    font-size: 25px;
    ::placeholder {
      color: #cbd5e1;
    }
  }
`;

export const SearchIcon = styled(Image)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
