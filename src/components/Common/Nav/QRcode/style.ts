import flex from "@/src/styles/flex";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const QRCodeBox = styled.div`
  width: 100%;
  height: auto;

  background-color: #fff;
  border-radius: 5px;

  border: 1px solid #ddd;
  padding: 15px 10px;

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const QRCodeContainer = styled.div`
  width: auto;
  height: auto;
  ${flex({ flexDirection: "column", alignItems: "center", rowGap: "3px" })}

  p {
    font-family: "Pretendard-Bold" !important;
  }
`;

export const AndroidQRCodeImage = styled(Image)`
  width: 130px;
  height: 130px;
`;
