import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import flex from "@/style/flex";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);

  ${flex({ alignItems: "center", justifyContent: "center" })}
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

export const Wrapper = styled.div<{ imgurls: string[] }>`
  width: ${({ imgurls }) => (imgurls !== null ? "77%" : "40%")};
  height: 93%;
  background-color: #fff;

  border-radius: 5px;
  overflow: hidden;

  display: flex;
`;

export const ImageContainer = styled.div`
  width: 60%;
  height: auto;

  ${flex({ alignItems: "center", justifyContent: "center" })}
  background-color: #000;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const NoneImage = styled.div`
  width: 100%;
  height: 430px;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Content = styled.div<{ imgUrls: string[] }>`
  width: ${({ imgUrls }) => (imgUrls !== null ? "40%" : "100%")};
  height: 100%;
  border-left: 1px solid #ddd;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 7px 0px 12px;
`;
