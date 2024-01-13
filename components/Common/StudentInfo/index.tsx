import styled from "styled-components";
import flex from "@/style/flex";
import { StdInfoType } from "@/types/List/list.type";

interface Props {
  stdInfo: StdInfoType;
  userName: string;
}

export const StudentInfo = ({ stdInfo, userName }: Props) => {
  const { grade, number, room } = stdInfo;
  return (
    <Contaienr>
      <StudentName>{userName}</StudentName>
      <GradeClassNumber>
        {grade}학년 {room}반 {number}번
      </GradeClassNumber>
    </Contaienr>
  );
};

const Contaienr = styled.div`
  ${flex({ flexDirection: "column", rowGap: "4px" })}
`;

const StudentName = styled.p`
  font-size: 16px;
`;

const GradeClassNumber = styled.p`
  color: #858585;
  font-size: 13px;
`;
