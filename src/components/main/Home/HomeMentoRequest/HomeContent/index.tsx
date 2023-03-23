import aprofile from "../../.././.././../assets/images/aprofile.png";
import * as S from "../style";
import { useHomeContent } from "../../../../../hooks/Home/HomeContent/useHomeContent";
import { useRecoilState } from "recoil";
import { USERPROFILE } from "../../../../../recoil/User/UserAtom";

export default function HomeContent() {
  const { onChange, onKeyDown, text } = useHomeContent();
  const [userProfile, SetUserProfile] = useRecoilState<string>(USERPROFILE);
  return (
    <>
      <S.HomeMentoRequestTextProfile
        src={userProfile ? userProfile : aprofile}
        alt=""
      />
      <S.HomeMentoRequestTextArea
        placeholder="멘토 요청할 내용을 작성하세요"
        onChange={onChange}
        value={text}
        onKeyDown={onKeyDown}
      />
    </>
  );
}
