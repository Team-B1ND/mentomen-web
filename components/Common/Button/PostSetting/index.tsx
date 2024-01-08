import { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { usePost } from "@/hooks/Post/usePost";
import { useSetRecoilState } from "recoil";
import { ActiveEditPostFormAtom } from "@/stores/Post/post.store";
import { useEscCloseModal } from "@/hooks/common/useEscCloseModal";
import useLockScroll from "@/hooks/common/useLockScroll";

interface Props {
  postId: number;
  setIsActivePostSetting: Dispatch<SetStateAction<boolean>>;
}

const PostSetting = ({ postId, setIsActivePostSetting }: Props) => {
  const { handleDeletePostClick } = usePost();
  const setActiveEditPost = useSetRecoilState(ActiveEditPostFormAtom);

  useEscCloseModal(setIsActivePostSetting);
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
          수정하기
        </S.TextBox>
        <S.TextBox
          isDelete={true}
          onClick={() => handleDeletePostClick(postId, setIsActivePostSetting)}
        >
          삭제하기
        </S.TextBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostSetting;
