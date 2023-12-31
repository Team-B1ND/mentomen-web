import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
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
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  return (
    <S.Container onClick={() => setIsActiveDetail(false)}>
      <S.Wrapper imgUrls={imgUrls} onClick={(e) => e.stopPropagation()}>
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
      <DetailContent data={detailPost?.data!!} />
    </>
  );
};

export default Detail;
