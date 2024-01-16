import flex from "@/style/flex";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 70%;
  height: 450px;

  background-color: #000;
  border-radius: 5px;

  overflow: hidden;
  border: 1px solid #ddd;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const DetailImageModalContainer = styled.div`
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

  transform: scale(1);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: #eee;
    color: gray;
  }
  &:active {
    background-color: #ddd;
    transform: scale(0.93);
  }
`;

export const DetailImageModalWrapper = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
  }
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
`;
