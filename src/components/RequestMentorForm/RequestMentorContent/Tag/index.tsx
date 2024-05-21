import { REQUEST_MENTOR_TAGS_ITEMS } from "./constant";
import * as S from "../style";
import { Dispatch, SetStateAction, useState } from "react";
import { Row } from "@/src/stories/layout";

interface Props {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
}

const RequestMentorFormTag = ({ tag, setTag }: Props) => {
  const [postTagId, setPostTagId] = useState("");
  return (
    <Row
      $columnGap={"13px"}
      $width={"100%"}
      $padding={"5px 0 35px 0"}
      $customStyle={S.TagWrap}
    >
      {REQUEST_MENTOR_TAGS_ITEMS.map((item) => (
        <li
          key={item.id}
          onMouseEnter={() => setPostTagId(item.id)}
          onMouseLeave={() => setPostTagId("")}
          onClick={() => setTag(item.id)}
        >
          <S.TagIcon
            src={
              tag === item.id || postTagId === item.id
                ? item.fillTag
                : item.unFillTag
            }
            width={74}
            height={30}
            alt="태그"
          />
        </li>
      ))}
    </Row>
  );
};

export default RequestMentorFormTag;
