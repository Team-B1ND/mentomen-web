import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { NOTICE } from "../../../recoil/notice/noticeAtom";
import GlobalStyle from "../../../style/Global";
import Notice from "../../notice";
import Header from "../header/header";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  const [NoticeModal, SetNoticeModal] = useRecoilState<boolean>(NOTICE);

  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      {NoticeModal && <Notice />}
    </>
  );
}

export default PageTemplate;
