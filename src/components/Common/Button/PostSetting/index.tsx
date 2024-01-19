import { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { useRegistPost } from "@/hooks/Post/useRegistPost";
import { useSetRecoilState } from "recoil";
import { ActiveEditPostFormAtom } from "@/stores/Post/post.store";
import useEscCloseModal from "@/hooks/Modal/useEscCloseModal";
import useLockScroll from "@/hooks/common/useLockScroll";

interface Props {
  postId: number;
  setIsActivePostSetting: Dispatch<SetStateAction<boolean>>;
}

const PostSetting = ({ postId, setIsActivePostSetting }: Props) => {
  const { handleDeletePostClick } = useRegistPost();
  const setActiveEditPost = useSetRecoilState(ActiveEditPostFormAtom);

  useEscCloseModal(() => setIsActivePostSetting(false));
  useLockScroll();

  return (
    <S.Container onClick={() => setIsActivePostSetting(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.TextBox
          onClick={() => {
            setIsActivePostSetting(false);
            setActiveEditPost(true);
          }}
        >
          <S.EditIcon />
          <p>수정</p>
        </S.TextBox>
        <S.TextBox
          isDelete={true}
          onClick={() => handleDeletePostClick(postId, setIsActivePostSetting)}
        >
          <S.DeleteIcon />
          <p>삭제</p>
        </S.TextBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostSetting;
