import { DetailItemContainer } from "@/src/components/Detail/style";
import { SkeletonBox } from "@/src/stories/ui";
import DetailCommentSkeleton from "./DetailComment";

const DetailSkeleton = () => {
  return (
    <DetailItemContainer>
      <SkeletonBox width="100%" height="250px" />
      <DetailCommentSkeleton />
    </DetailItemContainer>
  );
};

export default DetailSkeleton;
