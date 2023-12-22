import { AiOutlineClose } from "react-icons/ai";
import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction, Suspense } from "react";
import ErrorBoundary from "../../Common/ErrorBoundary";
import * as S from "./style";
import NoticeItem from "./NoticeItem";
import { turnOffModal } from "../../../util/Modal/turnOffOnModal";

interface Props {
  setIsActiveNotice: Dispatch<SetStateAction<boolean>>;
}

const Notice = ({ setIsActiveNotice }: Props) => {
  useEscCloseModal(setIsActiveNotice);
  return (
    <S.Container onClick={() => setIsActiveNotice(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.NoticeText>
          <p>알림</p>
          <AiOutlineClose
            onClick={() => turnOffModal(setIsActiveNotice)}
            cursor={"pointer"}
            size={17}
          />
        </S.NoticeText>

        <S.Content>
          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<>로딩 중...</>}>
              <NoticeItem setIsActiveNotice={setIsActiveNotice} />
            </Suspense>
          </ErrorBoundary>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Notice;
