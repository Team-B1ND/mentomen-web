import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction, Suspense } from "react";
import ErrorBoundary from "../../Common/ErrorBoundary";
import * as S from "./style";
import NoticeItem from "./NoticeItem";
import { TurnOnOffModal } from "../../../util/Modal/turnOffOnModal";
import NoticeSkeleton from "../../Common/Skeleton/Notice";

interface Props {
  setIsActiveNotice: Dispatch<SetStateAction<boolean>>;
}

const Notice = ({ setIsActiveNotice }: Props) => {
  useEscCloseModal(setIsActiveNotice);
  const turnOffNoticeModal = new TurnOnOffModal(setIsActiveNotice);

  return (
    <S.Container onClick={turnOffNoticeModal.turnOffModal}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.NoticeText>
          <p>알림</p>
          <S.CloseIcon onClick={turnOffNoticeModal.turnOffModal} />
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
