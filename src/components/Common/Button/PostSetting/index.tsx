import { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { useRegistPost } from "@/src/hooks/RequestMentor/useRegistPost";
import { useSetRecoilState } from "recoil";
import useEscCloseModal from "@/src/hooks/Modal/useEscCloseModal";
import useLockScroll from "@/src/hooks/common/useLockScroll";
import { useRouter } from "next/router";
import { ListItemType } from "@/src/types/List/list.type";
import { ExistingPostDataAtom } from "@/src/stores/Post/post.store";

interface Props {
  listItemData: ListItemType;
  setIsActivePostSetting: Dispatch<SetStateAction<boolean>>;
}

const PostSetting = ({ listItemData, setIsActivePostSetting }: Props) => {
  const setExistingPostData = useSetRecoilState(ExistingPostDataAtom);
  const { handleDeletePostClick } = useRegistPost();
  const router = useRouter();

  useEscCloseModal(() => setIsActivePostSetting(false));
  useLockScroll();

  return (
    <S.Container onClick={() => setIsActivePostSetting(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.TextBox
          onClick={() => {
            setIsActivePostSetting(false);
            setExistingPostData(listItemData);
            router.push("/request-mentor/modify");
          }}
        >
          <S.EditIcon />
          <p>수정</p>
        </S.TextBox>
        <S.TextBox
          isDelete={true}
          onClick={() =>
            handleDeletePostClick(listItemData.postId, setIsActivePostSetting)
          }
        >
          <S.DeleteIcon />
          <p>삭제</p>
        </S.TextBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostSetting;
