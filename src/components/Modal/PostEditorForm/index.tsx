import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import { usePost } from "../../../hooks/Post/usePost";
import PostEditorFormContent from "./PostEditorFormContent";
import PostEditorFormImage from "./PostEditorFormImage";
import * as S from "./style";

interface Props {
  setIsActivePostForm: Dispatch<SetStateAction<boolean>>;
}

const PostEditorForm = ({ setIsActivePostForm }: Props) => {
  useEscCloseModal(setIsActivePostForm);
  const { ...hooks } = usePost();

  return (
    <S.Container onClick={() => setIsActivePostForm(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Title>
          <p>글 작성하기</p>
          <S.CloseIcon size={20} onClick={() => setIsActivePostForm(false)} />
        </S.Title>

        <S.Form
          onSubmit={(e) => hooks.handlePostSubmit(e, setIsActivePostForm)}
        >
          <PostEditorFormImage imgUrls={hooks.imgUrl} />
          <PostEditorFormContent {...hooks} />
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostEditorForm;
