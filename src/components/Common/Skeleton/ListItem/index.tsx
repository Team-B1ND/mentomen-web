import React from "react";
import * as S from "../style";

const ListItemSkeleton = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, idx) => (
        <S.ListItemSkeletonBox key={idx} />
      ))}
    </>
  );
};

export default ListItemSkeleton;
