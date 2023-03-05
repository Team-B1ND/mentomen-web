import { useParams } from "react-router-dom";
import ProfileBar from "../common/Profile";
import * as S from "./style";
import TagLists from "./taglists";

export default function TagList() {
  const { tag } = useParams();

  return (
    <>
      <ProfileBar />
      <S.TagListContainer>
        <S.TagWrap>
          <TagLists tag={tag!!} />
        </S.TagWrap>
      </S.TagListContainer>
    </>
  );
}
