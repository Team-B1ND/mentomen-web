import { useParams } from "react-router-dom";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { CommentModal } from "../../recoil/Detail/DetailAtom";
import { Suspense } from "react";
import ProfileBar from "../\bCommon/Profile";
import FallbackSkeletonLists from "../\bCommon/fallbackskeleton/lists";
import ErrorBoundary from "../\bCommon/errorboundary";
import DetailViewMore from "./detailViewMore";
import DetailCommentWrite from "./detailCommentWrite";
import DetailCommentList from "./detailCommentList";
import FallbackSkeletonDetailComments from "../\bCommon/fallbackskeleton/detail/comments";
import DetailCommentModal from "./detailCommentList/detailCommentModal";

export default function Detail() {
  const { postId } = useParams();
  const [commentModal, SetCommentModal] = useRecoilState<boolean>(CommentModal);
  return (
    <div>
      <ProfileBar />
      <S.DetailContainer>
        <S.DetailViewContainer>
          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<FallbackSkeletonLists len={1} />}>
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
              <DetailCommentList postId={Number(postId)} />
            </Suspense>
          </ErrorBoundary>
        </S.DetailCommentsWrap>
      </S.DetailContainer>

      {commentModal && <DetailCommentModal />}
    </div>
  );
}
