import flex from "@/src/styles/flex";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.ul<{ commentLenght: number }>`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  border: ${({ commentLenght }) => commentLenght > 0 && "1px solid #ddd"};
  ${flex({ flexDirection: "column" })}
`;

export const CommentsList = styled.li<{ isLast: boolean }>`
  width: 100%;
  border-bottom: ${({ isLast }) => !isLast && "1px solid #ddd"};
  padding: 20px 16px 10px 20px;
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
  div {
    ${flex({ columnGap: "6px", alignItems: "flex-end" })}
  }
`;

export const CommenterName = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Medium" !important;
`;

export const CommentUpadateTimeText = styled.p`
  font-size: 12px;
  color: #606060;
`;

export const CommenterClassInfo = styled.p`
  color: #858585;
  font-size: 13px;
`;

export const CommentText = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 15px;
  line-height: 18px;
`;
