import * as S from "../../style";

export default function FallbackSkeletonDetailComments() {
  return (
    <>
      {Array.from({ length: 6 }).map((item, idx) => (
        <div key={idx}>
          <S.SkeletonCommentWrap>
            <S.SkeletonCommentLists />
          </S.SkeletonCommentWrap>
        </div>
      ))}
    </>
  );
}
