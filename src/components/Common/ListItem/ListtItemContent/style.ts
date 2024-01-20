import flex from "@/src/style/flex";
import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 6px;
`;

export const EtcContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding-right: 5px;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const IconContainer = styled.div`
  ${flex({ alignItems: "center", columnGap: "5px" })}
`;

export const UploadDateTime = styled.p`
  color: #858585;
  font-size: 14px;
`;
