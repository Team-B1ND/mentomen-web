import * as S from "../style";

export default function FallbackSkeletonLists() {
  return (
    <>
      {Array.from({ length: 6 }).map((item, idx) => (
        <div key={idx}>
          <S.SkeletonPostWrap>
            <S.SkeletonPostLists />
          </S.SkeletonPostWrap>
        </div>
      ))}
    </>
  );
}
