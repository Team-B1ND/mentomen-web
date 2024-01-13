import { Dispatch, SetStateAction, Suspense } from "react";
import ErrorBoundary from "../../Common/ErrorBoundary";
import * as S from "./style";
import NoticeItem from "./NoticeItem";
import NoticeSkeleton from "../../Common/Skeleton/Notice";
import useLockScroll from "@/hooks/common/useLockScroll";
import useEscCloseModal from "@/hooks/common/useEscCloseModal";

interface Props {
  setIsActiveNotice: Dispatch<SetStateAction<boolean>>;
}

const Notice = ({ setIsActiveNotice }: Props) => {
  useEscCloseModal(setIsActiveNotice);
  useLockScroll();

  return (
    <S.Container onClick={() => setIsActiveNotice(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.NoticeText>
          <p>알림</p>
          <S.CloseIcon onClick={() => setIsActiveNotice(false)} />
        </S.NoticeText>

        <S.Content>
          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<NoticeSkeleton />}>
              <NoticeItem setIsActiveNotice={setIsActiveNotice} />
            </Suspense>
          </ErrorBoundary>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Notice;
