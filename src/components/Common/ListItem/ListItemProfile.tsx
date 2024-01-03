import { Portal } from "@stubee2/stubee2-rolling-ui";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import profile from "../../../assets/icons/user/aprofile.png";
import { EditPostDataAtom } from "../../../stores/Post/post.store";
import { UserIdAtom } from "../../../stores/User/user.store";
import { ListItemType } from "../../../types/List/list.type";
import { TurnOnOffModal } from "../../../util/Modal/turnOffOnModal";
import SetUp from "../Button/SetUp";
import { StudentInfo } from "../StudentInfo";
import * as S from "./style";

const ListItemProfile = ({ ...attr }: ListItemType) => {
  const userId = useRecoilValue(UserIdAtom);
  const [isActiveSetUp, setIsActiveSetUp] = useState(false);
  const setEditPostData = useSetRecoilState(EditPostDataAtom);
  const turnOnSetUpModal = new TurnOnOffModal(setIsActiveSetUp);

  return (
    <>
      <S.Profile>
        <S.UserInfo>
          <S.ProfileImg src={attr.profileUrl || profile} alt="이미지 없음" />
          <StudentInfo stdInfo={attr.stdInfo} userName={attr.userName} />
        </S.UserInfo>

        {userId === attr.author && (
          <S.DotsIcon
            isActiveSetUp={isActiveSetUp}
            onClick={() => {
              turnOnSetUpModal.turnOnModal();
              setEditPostData(attr);
            }}
          />
        )}
      </S.Profile>

      {isActiveSetUp && (
        <Portal id="modal">
          <SetUp postId={attr.postId} setIsActiveSetUp={setIsActiveSetUp} />
        </Portal>
      )}
    </>
  );
};

export default ListItemProfile;
