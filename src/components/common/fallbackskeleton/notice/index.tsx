import * as S from "../style";

export default function FallbackSkeletonNotice() {
  return (
    <>
      {Array.from({ length: 6 }).map((item, idx) => (
        <div key={idx}>
          <S.SkeletonNoticeWrap>
            <S.SkeletonNoitceLists />
          </S.SkeletonNoticeWrap>
        </div>
      ))}
    </>
  );
}
