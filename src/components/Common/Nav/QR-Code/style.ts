import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const QRCodeBox = styled.div`
  width: 100%;

  padding: 15px 10px;
  background-color: #fff;

  border-radius: 5px;
  border: 1px solid #ddd;

  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

export const QRCodeImage = styled(Image)`
  width: 130px;
  height: 130px;
  cursor: pointer;
`;

export const QRCodeTitle = styled.p`
  font-family: "Pretendard-Bold" !important;
  font-size: 15px;
`;
