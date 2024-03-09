import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const QRCodeBox = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;

  border: 1px solid #ddd;
  padding: 15px 10px;

  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

export const QRCodeContainer = styled.div`
  ${Flex({ flexDirection: "column", alignItems: "center" })}

  p {
    font-family: "Pretendard-Bold" !important;
    font-size: 15px;
  }
`;

export const QRCodeImage = styled(Image)`
  width: 130px;
  height: 130px;
  cursor: pointer;
`;
