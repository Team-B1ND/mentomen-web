import { Dispatch, SetStateAction, Suspense } from "react";
import { useGetApost } from "../../../queries/Post/post.query";
import * as S from "./style";
import DetailImage from "./DetailImage";
import ErrorBoundary from "../../Common/ErrorBoundary";
import DetailContent from "./DetailContent";
import { useRecoilValue } from "recoil";
import { PostIdAtom } from "../../../stores/common/common.store";
import DetailSkeleton from "../../Common/Skeleton/Detail";

interface Props {
  setIsActiveDetail: Dispatch<SetStateAction<boolean>>;
}

const Detail = ({ setIsActiveDetail }: Props) => {
  const postId = useRecoilValue(PostIdAtom);

  return (
    <S.Container onClick={() => setIsActiveDetail(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <ErrorBoundary fallback={<>Error :)</>}>
          <Suspense fallback={<DetailSkeleton />}>
            <DetailItem postId={postId} />
          </Suspense>
        </ErrorBoundary>
      </S.Wrapper>
    </S.Container>
  );
};

const DetailItem = ({ postId }: { postId: number }) => {
  const { data: detailPost } = useGetApost(postId, { suspense: true });
  return (
    <>
      <DetailImage imgUrls={detailPost?.data.imgUrls!!} />
      <DetailContent data={detailPost?.data!!} />
    </>
  );
};

export default Detail;
