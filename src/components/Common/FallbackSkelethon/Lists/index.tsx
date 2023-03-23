import * as S from "../style";

interface Props {
  len: number;
}

export default function FallbackSkeletonLists({len}:Props) {
  return (
    <>
      {Array.from({ length: len }).map((item, idx) => (
        <div key={idx}>
          <S.SkeletonPostWrap>
            <S.SkeletonPostLists />
          </S.SkeletonPostWrap>
        </div>
      ))}
    </>
  );
}
