import flex from "@/style/flex";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;
  ${flex({ flexDirection: "column", rowGap: "25px" })}
`;

export const TitleStyle = {
  fontSize: "20px",
};

export const NoticeItemContainer = styled.div`
  width: 100%;
  height: auto;
  padding-left: 3px;
  ${flex({ flexDirection: "column", alignItems: "center", rowGap: "13px" })}
`;

export const NoticeItemBox = styled.div`
  width: 100%;
  height: 90px;

  border-bottom: 1px solid #cbd5e1;
  padding-bottom: 10px;
  cursor: pointer;

  ${flex({ columnGap: "15px" })}
`;

export const ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 4rem;
  border: 1px solid #cbd5e1;
`;

export const NoticeContent = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  ${flex({ flexDirection: "column", rowGap: "10px" })}
`;

export const SenderText = styled.p`
  font-size: 16px;
  color: #0f172a;
  span {
    font-family: "Pretendard-Bold" !important;
  }
`;

export const SenderComment = styled.p`
  font-size: 15px;
  color: #334155;
  font-family: "Pretendard-Bold" !important;
`;

export const CommentUpdateDate = styled.p`
  font-size: 14px;
  color: #64748b;
`;
