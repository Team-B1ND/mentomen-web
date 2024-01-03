import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import useLockScroll from "../../../hooks/common/useLockScroll";
import { usePost } from "../../../hooks/Post/usePost";
import { EditPostDataAtom } from "../../../stores/Post/post.store";
import PostEditorFormContent from "./PostEditorFormContent";
import PostEditorFormImage from "./PostEditorFormImage";
import * as S from "./style";

interface Props {
  isActivePostForm: boolean;
  setIsActivePostEditForm: Dispatch<SetStateAction<boolean>>;
}

const PostEditorForm = ({
  isActivePostForm,
  setIsActivePostEditForm,
}: Props) => {
  const editPostData = useRecoilValue(EditPostDataAtom);
  const { ...hooks } = usePost(isActivePostForm, editPostData!!);

  useEscCloseModal(setIsActivePostEditForm, hooks.cancelWritingPost);
  useLockScroll();

  return (
    <S.Container
      onClick={() => hooks.handlePostEditorCancel(setIsActivePostEditForm)}
    >
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Title>
          <p>{isActivePostForm ? "글 작성하기" : "글 수정하기"}</p>
          <S.CloseIcon
            size={20}
            onClick={() =>
              hooks.handlePostEditorCancel(setIsActivePostEditForm)
            }
          />
        </S.Title>

        <S.Form
          onSubmit={(e) => hooks.handlePostSubmit(e, setIsActivePostEditForm)}
        >
          <PostEditorFormImage imgUrls={hooks.imgUrl} />
          <PostEditorFormContent
            isActivePostForm={isActivePostForm}
            {...hooks}
          />
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default PostEditorForm;
