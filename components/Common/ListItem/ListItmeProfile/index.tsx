import Image from "next/image";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { EditPostDataAtom } from "@/stores/Post/post.store";
import { ListItemType } from "@/types/List/list.type";
import PostSetting from "../../Button/PostSetting";
import { StudentInfo } from "../../StudentInfo";
import * as S from "./style";
import Portal from "@/components/Modal/Portal";
import getTag from "@/util/Tag/getTag";
import { useRouter } from "next/router";

const ListItemProfile = ({ ...attr }: ListItemType) => {
  const [isActivePostSetting, setIsActivePostSetting] = useState(false);
  const setEditPostData = useSetRecoilState(EditPostDataAtom);
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <S.Profile>
        <S.TagIcon src={getTag.getTagIcon(attr.tag)} alt="" />
        <S.UserInfo>
          <div>
            <StudentInfo stdInfo={attr.stdInfo} userName={attr.userName} />
          </div>

          {asPath === "/mypage" && (
            <S.DotsIcon
              postsetting={isActivePostSetting.toString()}
              onClick={() => {
                setIsActivePostSetting(true);
                setEditPostData(attr);
              }}
            />
          )}
        </S.UserInfo>
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
