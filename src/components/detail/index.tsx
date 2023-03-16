import { useParams } from "react-router-dom";
import DetailViewMore from "./detailViewMore";
import * as S from "./style";
import DetailCommentLists from "./detailCommentList";
import DetailCommentWrite from "./detailCommentWrite";
import ProfileBar from "../common/profile";
import { useRecoilState } from "recoil";
import { CommentModal } from "../../recoil/detail/DetailAtom";
import DetailCommentModal from "./detailCommentList/detailCommentModal";
import { Suspense } from "react";
import FallbackSkeletonDetailPost from "../common/fallbackskeleton/detail/post";
import ErrorBoundary from "../common/errorboundary";
import FallbackSkeletonDetailComments from "../common/fallbackskeleton/detail/comments";

export default function Detail() {
  const { postId } = useParams();
  const [commentModal, SetCommentModal] = useRecoilState<boolean>(CommentModal);
  return (
    <div>
      <ProfileBar />
      <S.DetailContainer>
        <S.DetailViewContainer>
          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<FallbackSkeletonDetailPost />}>
              <S.DetailView>
                <DetailViewMore postId={Number(postId)} />
              </S.DetailView>
            </Suspense>
          </ErrorBoundary>

          <S.DetailCommentForm>
            <DetailCommentWrite postId={Number(postId)} />
          </S.DetailCommentForm>
        </S.DetailViewContainer>

        <S.DetailCommentsWrap>
          <ErrorBoundary fallback={<>Error :)</>}>
            <Suspense fallback={<FallbackSkeletonDetailComments />}>
              <DetailCommentLists postId={Number(postId)} />
            </Suspense>
          </ErrorBoundary>
        </S.DetailCommentsWrap>
      </S.DetailContainer>

      {commentModal && <DetailCommentModal />}
    </div>
  );
}
