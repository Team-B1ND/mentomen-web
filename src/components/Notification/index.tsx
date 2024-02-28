import useTokenCheck from "@/src/hooks/Auth/useTokenCheck";
import useHideHeaderOrNav from "@/src/hooks/common/useHideHeaderOrNav";
import { UserDataAtom } from "@/src/store/User/user.store";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import ErrorBoundary from "../Common/ErrorBoundary";
import NotificationSkeleton from "../Common/ui/Skeleton/Notification";
import Title from "../Common/ui/Title";
import NotificationItem from "./NotificationItem";
import bell from "@/public/icons/title/bell.png";
import * as S from "./style";
import { NoneDataText } from "@/src/styles/common.style";

const Notification = () => {
  useTokenCheck();
  useHideHeaderOrNav("Nav");

  const userData = useRecoilValue(UserDataAtom);

  return (
    <S.Container>
      <Title
        titleIcon={bell}
        titleText="알림 확인하기"
        subTitleText={`${userData?.name} 님에게 온 멘토 요청 글 알림을 확인해 보세요!`}
        customstyle={{ fontSize: "18px" }}
      />

      <S.NoticeItemContainer>
        <ErrorBoundary
          fallback={
            <NoneDataText>알림 정보를 불러오지 못했습니다.</NoneDataText>
          }
        >
          <Suspense fallback={<NotificationSkeleton />}>
            <NotificationItem />
          </Suspense>
        </ErrorBoundary>
      </S.NoticeItemContainer>
    </S.Container>
  );
};

export default Notification;
