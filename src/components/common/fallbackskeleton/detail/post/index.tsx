import * as S from '../../style';

export default function FallbackSkeletonDetailPost(){
    return(
        <S.SkeletonPostWrap>
            <S.SkeletonPostLists />
        </S.SkeletonPostWrap>
    );
}