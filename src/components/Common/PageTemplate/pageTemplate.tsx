import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { MypageEditModal } from "../../../recoil/MyPage/mypageAtom";
import { NOTICE } from "../../../recoil/Notice/noticeAtom";
import GlobalStyle from "../../../style/Global";
import MyPageEditModal from "../../MyPage/MyPageModal/mypageEditModal";
import Notice from "../../Notice";
import Header from "../Header/header";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  const [NoticeModal, SetNoticeModal] = useRecoilState<boolean>(NOTICE);
  const [myPageEditModal, SetMyPageEditModal] =
    useRecoilState<boolean>(MypageEditModal);
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      {NoticeModal && <Notice />}
      {myPageEditModal && <MyPageEditModal />}
    </>
  );
}

export default PageTemplate;
