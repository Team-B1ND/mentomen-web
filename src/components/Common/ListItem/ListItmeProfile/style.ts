import flex from "@/src/styles/flex";
import styled, { CSSObject } from "styled-components";
import Image from "next/image";

export const Profile = styled.div`
  width: 100%;
  height: auto;

  ${flex({
    alignItems: "flex-start",
    justifyContent: "space-between",
    columnGap: "4px",
  })}
`;

export const TagIcon = styled(Image)`
  width: 32px;
  height: 42px;
`;

export const UserInfo = styled.div`
  width: calc(100% - 40px);
  padding-top: 7px;
  ${flex({
    alignItems: "center",
    columnGap: "10px",
    justifyContent: "space-between",
  })};
`;

export const StudentInfoWrap = styled.div`
  ${flex({ flexDirection: "column", rowGap: "4px" })}
`;

export const StudentName = styled.p`
  font-size: 16px;
`;

export const GradeClassNumber = styled.p`
  color: #858585;
  font-size: 13px;
`;

export const ProfileImage = {
  width: "35px",
  height: "35px",
  borderRadius: "4rem",
  border: "1px solid #ddd",
};

export const StudentInfoContainer = styled.div`
  font-family: "Pretendard-Bold" !important;
  font-weight: 700;
  font-size: 15px;
  ${flex({ alignItems: "center", columnGap: "3px" })}
`;

export const SettingStyle: CSSObject = {
  top: "-15px",
};

export const DotsStyle: CSSObject = {
  width: "23px",
  height: "23px",
  padding: "3px",
};
