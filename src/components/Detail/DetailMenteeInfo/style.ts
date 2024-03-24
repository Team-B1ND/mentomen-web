import { Flex } from "@/src/stories/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  ${Flex({ justifyContent: "space-between" })}
`;

export const ProfileBox = styled.div`
  ${Flex({ alignItems: "center", columnGap: "18px" })}
`;

export const MenteeInfo = styled.div`
  ${Flex({ flexDirection: "column", rowGap: "5px" })}
  div {
    font-size: 15px;
    ${Flex({ alignItems: "flex-end", columnGap: "6px" })}
  }
`;

export const MenteeName = styled.p`
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
