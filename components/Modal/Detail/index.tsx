import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import { useGetApost } from "../../../queries/Post/post.query";
import * as S from "./style";
import DetailImage from "./DetailImage";
import ErrorBoundary from "../../Common/ErrorBoundary";
import DetailComent from "./DetailComent";
import { useRecoilState, useRecoilValue } from "recoil";
import { PostIdAtom } from "../../../stores/common/common.store";
import DetailSkeleton from "../../Common/Skeleton/Detail";
import { IsEditCommentAtom } from "../../../stores/Comment/comment.store";
import useLockScroll from "../../../hooks/common/useLockScroll";

interface Props {
  setIsActiveDetail: Dispatch<SetStateAction<boolean>>;
}

const Detail = ({ setIsActiveDetail }: Props) => {
  const postId = useRecoilValue(PostIdAtom);
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const [isEditComment, setIsEditComment] = useRecoilState(IsEditCommentAtom);

  useLockScroll();

  const handleCloseDetail = (
    e: React.MouseEvent<HTMLDivElement | SVGElement>
  ) => {
    e.stopPropagation();
    if (isEditComment.isEdit === true) {
      const answer = window.confirm(
        "작성하신 댓글은 저장되지 않습니다. 댓글 작성을 취소하시겠습니까?"
      );

      if (answer) {
        setIsActiveDetail(false);
        setIsEditComment((prev) => ({ ...prev, isEdit: false, commentId: -1 }));
      }
    } else {
      setIsActiveDetail(false);
    }
  };

  return (
    <S.Container onClick={handleCloseDetail}>
      <S.CloseIcon size={27} onClick={handleCloseDetail} />
      <S.Wrapper imgurls={imgUrls} onClick={(e) => e.stopPropagation()}>
        <ErrorBoundary fallback={<>Error :)</>}>
          <Suspense fallback={<DetailSkeleton />}>
            <DetailItem postId={postId} setImgUrls={setImgUrls} />
          </Suspense>
        </ErrorBoundary>
      </S.Wrapper>
    </S.Container>
  );
};

const DetailItem = ({
  postId,
  setImgUrls,
}: {
  postId: number;
  setImgUrls: Dispatch<SetStateAction<string[]>>;
}) => {
  const { data: detailPost } = useGetApost(postId, { suspense: true });
  const { imgUrls } = detailPost?.data!!;

  useEffect(() => {
    setImgUrls(imgUrls);
  }, [imgUrls]);

  return (
    <>
      {imgUrls !== null && <DetailImage imgUrls={imgUrls} />}
      <DetailComent data={detailPost?.data!!} />
    </>
  );
};

export default Detail;
