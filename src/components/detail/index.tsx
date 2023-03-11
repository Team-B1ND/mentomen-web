import { useParams } from "react-router-dom";
import DetailViewMore from "./detailViewMore";
import * as S from "./style";
import DetailCommentLists from "./detailCommentList";
import DetailCommentWrite from "./detailCommentWrite";
import ProfileBar from "../common/profile";

export default function Detail() {
  const { postId } = useParams();
  return (
    <div>
      <ProfileBar/>
      <S.DetailContainer>
        <S.DetailViewContainer>
          <S.DetailView>
            <DetailViewMore postId={Number(postId)} />
          </S.DetailView>

          <S.DetailCommentForm>
            <DetailCommentWrite postId={Number(postId)}/>
          </S.DetailCommentForm>
        </S.DetailViewContainer>

        <S.DetailCommentsWrap>
          <DetailCommentLists postId={Number(postId)} />
        </S.DetailCommentsWrap>
      </S.DetailContainer>
    </div>
  );
}
