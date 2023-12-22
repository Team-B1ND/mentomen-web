import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
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
          <p>글 등록하기</p>
          <AiOutlineClose
            onClick={() => setIsActivePostForm(false)}
            cursor={"pointer"}
            size={20}
          />
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
