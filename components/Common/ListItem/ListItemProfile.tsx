import Image from "next/image";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import profile from "@/public/icons/user/aprofile.png";
import { EditPostDataAtom } from "@/stores/Post/post.store";
import { UserIdAtom } from "@/stores/User/user.store";
import { ListItemType } from "@/types/List/list.type";
import PostSetting from "../Button/PostSetting";
import { StudentInfo } from "../StudentInfo";
import * as S from "./style";
import Portal from "@/components/Modal/Portal";

const ListItemProfile = ({ ...attr }: ListItemType) => {
  const userId = useRecoilValue(UserIdAtom);
  const [isActivePostSetting, setIsActivePostSetting] = useState(false);
  const setEditPostData = useSetRecoilState(EditPostDataAtom);

  return (
    <>
      <S.Profile>
        <S.UserInfo>
          <Image
            src={attr.profileUrl || profile}
            width={1000}
            height={1000}
            style={S.ProfileImage}
            alt="이미지 없음"
          />
          <StudentInfo stdInfo={attr.stdInfo} userName={attr.userName} />
        </S.UserInfo>

        {userId === attr.author && (
          <S.DotsIcon
            postsetting={isActivePostSetting.toString()}
            onClick={() => {
              setIsActivePostSetting(true);
              setEditPostData(attr);
            }}
          />
        )}
      </S.Profile>

      <Portal>
        {isActivePostSetting && (
          <PostSetting
            postId={attr.postId}
            setIsActivePostSetting={setIsActivePostSetting}
          />
        )}
      </Portal>
    </>
  );
};

export default ListItemProfile;
