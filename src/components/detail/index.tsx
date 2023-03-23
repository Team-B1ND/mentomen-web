import { useParams } from "react-router-dom";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { CommentModal } from "../../recoil/Detail/DetailAtom";
import { Suspense } from "react";
import ProfileBar from "../Common/Profile";
import FallbackSkeletonLists from "../Common/FallbackSkelethon/Lists";
import ErrorBoundary from "../Common/ErrorBoundary";
import DetailViewMore from "./detailViewMore";
import DetailCommentWrite from "./detailCommentWrite";
import DetailCommentList from "./detailCommentList";
import FallbackSkeletonDetailComments from "../Common/FallbackSkelethon/Detail/Comments";
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
