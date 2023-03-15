import { Suspense, useEffect } from "react";
import { useRecoilState } from "recoil";
import { NOTICE, NOTICECHK } from "../../recoil/notice/noticeAtom";
import * as S from "./style";
import NoticeLists from "./noticeLists";
import ErrorBoundary from "../common/errorboundary";
import FallbackSkeletonNotice from "../common/fallbackskeleton/notice";

export default function Notice() {
  const [NoticeModal, SetNoticeModal] = useRecoilState<boolean>(NOTICE);
  const [NoticeChk, SetNoticeChk] = useRecoilState<string>(NOTICECHK);

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

  //알람버튼을 누르면 빨간점이 없어져야하므로 아래 useEffect 코드로 해준다.
  useEffect(() => {
    if (NoticeChk === "EXIST") SetNoticeChk("NONE");
  }, [SetNoticeChk, NoticeChk]);

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
