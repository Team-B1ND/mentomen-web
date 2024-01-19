import { REQUEST_MENTOR_TAGS_ITEMS } from "./constant";
import * as S from "../style";
import { Dispatch, SetStateAction, useState } from "react";
import { PostSubmitType } from "@/types/List/list.type";

interface Props {
  postData: PostSubmitType;
  setPostData: Dispatch<SetStateAction<PostSubmitType>>;
}

const RequestMentorFormTag = ({ postData, setPostData }: Props) => {
  const [postTagId, setPostTagId] = useState("");
  return (
    <S.TagUl>
      {REQUEST_MENTOR_TAGS_ITEMS.map((item) => (
        <li
          key={item.id}
          onMouseEnter={() => setPostTagId(item.id)}
          onMouseLeave={() => setPostTagId("")}
          onClick={() => setPostData((prev) => ({ ...prev, tag: item.id }))}
        >
          <S.TagIcon
            src={
              postData.tag === item.id || postTagId === item.id
                ? item.fillTag
                : item.unFillTag
            }
            alt="태그"
          />
        </li>
      ))}
    </S.TagUl>
  );
};

export default RequestMentorFormTag;
