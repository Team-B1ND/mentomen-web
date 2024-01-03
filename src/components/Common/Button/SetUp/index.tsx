import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { usePost } from "../../../../hooks/Post/usePost";
import { useSetRecoilState } from "recoil";
import { ActiveEditPostFormAtom } from "../../../../stores/Post/post.store";

interface Props {
  postId: number;
  setIsActiveSetUp: Dispatch<SetStateAction<boolean>>;
}

const SetUp = ({ postId, setIsActiveSetUp }: Props) => {
  const { handleDeletePostClick } = usePost();
  const setActiveEditPost = useSetRecoilState(ActiveEditPostFormAtom);
  useEscCloseModal(setIsActiveSetUp);

  return (
    <S.Container onClick={() => setIsActiveSetUp(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.TextBox
          onClick={() => {
            setIsActiveSetUp(false);
            setActiveEditPost(true);
          }}
        >
          수정하기
        </S.TextBox>
        <S.TextBox
          isDelete={true}
          onClick={() => handleDeletePostClick(postId, setIsActiveSetUp)}
        >
          삭제하기
        </S.TextBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default SetUp;
