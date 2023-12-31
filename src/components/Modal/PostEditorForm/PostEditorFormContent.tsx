import { Dispatch, RefObject, SetStateAction, useState } from "react";
import { POSTEDITOR_TAGS_ITEMS } from "../../../constants/Tags/tags.constant";
import { PostSubmitType } from "../../../types/List/list.type";
import * as S from "./style";
import { FiUpload } from "react-icons/fi";

interface Props {
  isActivePostForm: boolean;
  postData: PostSubmitType;
  setPostData: Dispatch<SetStateAction<PostSubmitType>>;
  handleFileUploadChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectFileImage: RefObject<HTMLInputElement>;
}

const PostEditorFormContent = ({ isActivePostForm, ...hooks }: Props) => {
  const [postTagId, setPostTagId] = useState("");
  const { postData, setPostData, handleFileUploadChange, selectFileImage } =
    hooks;

  return (
    <S.Content>
      <S.TagUl>
        {POSTEDITOR_TAGS_ITEMS.map((item) => (
          <S.TagLi
            key={item.id}
            onMouseEnter={() => setPostTagId(item.id)}
            onMouseLeave={() => setPostTagId("")}
            onClick={() => setPostData((prev) => ({ ...prev, tag: item.id }))}
          >
            <img
              src={
                postData.tag === item.id || postTagId === item.id
                  ? item.fillTag
                  : item.unFillTag
              }
              alt={item.id}
            />
          </S.TagLi>
        ))}
      </S.TagUl>

      <S.ContentTextArea
        value={postData.content}
        onChange={(e) =>
          setPostData((prev) => ({ ...prev, content: e.target.value }))
        }
        placeholder="내용을 입력해주세요."
      />

      <S.Submit>
        <S.Upload onClick={() => selectFileImage.current?.click()}>
          <input
            type="file"
            onChange={handleFileUploadChange}
            ref={selectFileImage}
            multiple
            accept=".jpeg, .jpg, .png"
          />
          <FiUpload size={20} />
          <p>이미지 업로드하기</p>
        </S.Upload>
        <S.SubmitButton type="submit">
          {isActivePostForm ? "작성하기" : "수정하기"}
        </S.SubmitButton>
      </S.Submit>
    </S.Content>
  );
};

export default PostEditorFormContent;
