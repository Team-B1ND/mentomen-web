import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import styled from "styled-components";
import flex from "@/src/styles/flex";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
  background-color: rgba(0, 0, 0, 0.8);
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
