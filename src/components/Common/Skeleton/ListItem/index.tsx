import { SkeletonBox } from "@/src/stories/ui";

const ListItemSkeleton = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, idx) => (
        <SkeletonBox key={idx} />
      ))}
    </>
  );
};

export default ListItemSkeleton;
