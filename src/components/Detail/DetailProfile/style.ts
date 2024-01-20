import flex from "@/src/style/flex";
import Image from "next/image";
import styled, { CSSObject } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  ${flex({ justifyContent: "space-between" })}
`;

export const ProfileBox = styled.div`
  ${flex({ alignItems: "center", columnGap: "18px" })}
`;

export const ProfileImage = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const PosterInfo = styled.div`
  ${flex({ flexDirection: "column", rowGap: "5px" })}
  div {
    font-size: 15px;
    ${flex({ alignItems: "flex-end", columnGap: "6px" })}
  }
`;

export const PosterName = styled.p`
  font-family: "Pretendard-Medium" !important;
`;

export const UploadPostTime = styled.p`
  font-size: 12px;
  color: #606060;
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
