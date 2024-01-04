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
      <p>
        {grade}
        {room}
        {number > 10 ? number : `0${number}`}
      </p>
      <p>{userName}</p>
    </Contaienr>
  );
};

const Contaienr = styled.div`
  ${flex({ alignItems: "center", columnGap: "3px" })}
  font-size: 15px;

  P {
    font-family: "Pretendard-Bold" !important;
  }
`;
