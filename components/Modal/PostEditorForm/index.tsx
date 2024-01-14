import useEscCloseModal from "@/hooks/common/useEscCloseModal";
import { Dispatch, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import useLockScroll from "@/hooks/common/useLockScroll";
import { useRegistPost } from "@/hooks/Post/useRegistPost";
import { EditPostDataAtom } from "@/stores/Post/post.store";
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
  const { ...hooks } = useRegistPost(isActivePostForm, editPostData!!);

  useEscCloseModal(setIsActivePostEditForm, hooks.cancelWritingPost);
  useLockScroll();

  return (
    <S.Container
      onClick={() => hooks.handlePostEditorCancel(setIsActivePostEditForm)}
    >
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Title>
          <p>{isActivePostForm ? "멘토 요청하기" : "멘토 요청 수정하기"}</p>
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
