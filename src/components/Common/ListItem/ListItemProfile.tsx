import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import profile from "../../../assets/images/aprofile.png";
import { USERID } from "../../../stores/User/UserAtom";
import * as S from "./style";

interface Props {
  profileUrl: string;
  stdInfo: {
    grade: number;
    number: number;
    room: number;
  };
  userName: string;
  author: number;
}

const ListItemProfile = ({ profileUrl, stdInfo, userName, author }: Props) => {
  const { grade, room, number } = stdInfo;
  const userId = useRecoilValue(USERID);

  return (
    <S.Profile>
      <S.UserInfo>
        <S.ProfileImg src={profileUrl || profile} alt="이미지 없음" />

        <S.ClassInfo>
          <p>
            {grade}
            {room}
            {number > 10 ? number : `0${number}`}
          </p>
          <p>{userName}</p>
        </S.ClassInfo>
      </S.UserInfo>

      {userId === author && (
        <BiDotsHorizontalRounded size={30} cursor="pointer" color="#000" />
      )}
    </S.Profile>
  );
};

export default ListItemProfile;
