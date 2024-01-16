import flex from "@/style/flex";
import Image from "next/image";
import styled, { CSSObject } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  ${flex({ justifyContent: "space-between" })}
`;

export const ProfileBox = styled.div`
  ${flex({ alignItems: "center", columnGap: "13px" })}
`;

export const ProfileImage = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const PosterInfo = styled.div`
  ${flex({ flexDirection: "column", rowGap: "4px" })}
  div {
    font-size: 15px;
    ${flex({ alignItems: "center", columnGap: "6px" })}
  }
`;

export const PosterName = styled.p`
  font-family: "Pretendard-Medium" !important;
`;

export const UploadPostTime = styled.p`
  font-size: 13px;
  color: #0f0f0f;
`;

export const ClassInfo = styled.p`
  color: #858585;
  font-size: 14px;
`;

export const DotsStyle: CSSObject = {
  width: "25px",
  height: "25px",
  marginTop: "3px",
};
