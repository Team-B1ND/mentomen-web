import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { MypageEditModal } from "../../../recoil/mypage/mypageAtom";
import { NOTICE } from "../../../recoil/notice/noticeAtom";
import GlobalStyle from "../../../style/Global";
import MyPageEditModal from "../../mypage/mypageModal/mypageEditModal/indext";
import Notice from "../../notice";
import Header from "../header/header";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  const [NoticeModal, SetNoticeModal] = useRecoilState<boolean>(NOTICE);
  const [myPageEditModal,SetMyPageEditModal] = useRecoilState<boolean>(MypageEditModal);
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
