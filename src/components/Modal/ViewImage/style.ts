import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
`;
