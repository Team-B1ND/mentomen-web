import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const QRCodeBox = css`
  border-radius: 5px;
  border: 1px solid #ddd;
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
