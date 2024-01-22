import flex from "@/src/styles/flex";
import styled from "styled-components";
import Image from "next/image";
import { RxDotsVertical } from "react-icons/rx";

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

export const DotsIcon = styled(RxDotsVertical)<{
  postsetting: string;
}>`
  width: 23px;
  height: 23px;

  border-radius: 5px;
  padding: 3px;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  background-color: ${({ postsetting }) => postsetting === "true" && "#ddd"};

  &:hover {
    background-color: #ddd;
    transform: scale(0.93);
  }
  &:active {
    background-color: #eee;
  }
`;
