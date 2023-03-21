import { useRecoilState } from "recoil";
import aprofile from "../../.././.././../.././assets/images/aprofile.png";
import { USERPROFILE } from "../../../../../../recoil/user/UserAtom";
import * as S from "../../../../../main/Home/HomeMentoRequest/style";
import { useMyPostEdit } from "../../../../../../hooks/mypage/useMyPostEdit";

export default function EditContent() {
  const [userProfile, SetUserProfile] = useRecoilState<string>(USERPROFILE);
  const {myPostContent, onMyPageEditChange,onMyPageEditKeyPress} = useMyPostEdit();
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
