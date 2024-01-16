import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import useHideHeaderOrNav from "@/hooks/common/useHideHeaderOrNav";
import { UserDataAtom } from "@/stores/User/user.store";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import ErrorBoundary from "../Common/ErrorBoundary";
import NotiicationSkeleton from "../Common/Skeleton/Notiication";
import Title from "../Common/Title";
import NotificationItem from "./NotificationItem";
import bell from "@/public/icons/title/bell.png";
import * as S from "./style";

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
        style={S.TitleStyle}
      />
      <ErrorBoundary fallback={<>Error:)</>}>
        <Suspense fallback={<NotiicationSkeleton />}>
          <NotificationItem />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
};

export default Notification;
