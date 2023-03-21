import { Suspense, useEffect } from "react";
import { useRecoilState } from "recoil";
import { NOTICE } from "../../recoil/notice/noticeAtom";
import * as S from "./style";
import NoticeLists from "./noticeLists";
import ErrorBoundary from "../common/errorboundary";
import FallbackSkeletonNotice from "../common/fallbackskeleton/notice";

export default function Notice() {
  const [NoticeModal, SetNoticeModal] = useRecoilState<boolean>(NOTICE);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <S.NoitceContainer onClick={() => SetNoticeModal(!NoticeModal)}>
      <S.NoitceLayOut onClick={(e) => e.stopPropagation()}>
        <S.NoticeWrap>
          <ErrorBoundary fallback={<>Error :)</>}>
            <Suspense fallback={<FallbackSkeletonNotice />}>
              <NoticeLists />
            </Suspense>
          </ErrorBoundary>
        </S.NoticeWrap>
      </S.NoitceLayOut>
    </S.NoitceContainer>
  );
}
