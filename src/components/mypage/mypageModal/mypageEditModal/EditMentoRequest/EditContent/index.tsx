import { useRecoilState } from "recoil";
import aprofile from "../../.././.././../.././assets/images/aprofile.png";
import { USERPROFILE } from "../../../../../../recoil/User/UserAtom";
import * as S from "../../../../../Main/Home/HomeMentoRequest/style";
import { useMyPostEdit } from "../../../../../../hooks/MyPage/useMyPostEdit";

export default function EditContent() {
  const [userProfile, SetUserProfile] = useRecoilState<string>(USERPROFILE);
  const { myPostContent, onMyPageEditChange, onMyPageEditKeyPress } =
    useMyPostEdit();
  return (
    <>
      <S.HomeMentoRequestTextProfile
        src={userProfile ? userProfile : aprofile}
        alt=""
      />
      <S.HomeMentoRequestTextArea
        placeholder="멘토 요청할 내용을 수정하세요"
        value={myPostContent}
        onChange={onMyPageEditChange}
        onKeyPress={onMyPageEditKeyPress}
      />
    </>
  );
}
