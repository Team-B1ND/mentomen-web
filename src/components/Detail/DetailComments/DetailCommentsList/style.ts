import flex from "@/src/styles/flex";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  /* min-height: 300px; */
  border-radius: 5px;
  ${flex({ flexDirection: "column", rowGap: "35px" })}
`;

export const CommentsList = styled.li`
  width: 100%;
  ${flex({ columnGap: "20px" })};
`;

export const ProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const SettingStyle = {
  backgroundColor: "#f9f9f9",
};

export const CommentContent = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  padding-top: 3px;
  ${flex({ columnGap: "5px" })}
`;

export const CommenterInfoWrap = styled.div`
  width: calc(100% - 30px);
  ${flex({ flexDirection: "column", rowGap: "5px" })};
`;

export const CommenterInfo = styled.div`
  padding-top: 1px;
  ${flex({ rowGap: "5px", flexDirection: "column" })}
`;

export const CommenterNameAndClass = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Medium" !important;
`;

export const CommentUpadateTimeText = styled.p`
  font-size: 12px;
  color: #606060;
`;

export const CommentText = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 15px;
  line-height: 18px;
`;
