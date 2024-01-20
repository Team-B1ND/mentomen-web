import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { HideHeaderAtom, HideNavAtom } from "@/src/stores/common/common.store";
import GlobalStyle from "@/src/style/globalStyle";
import Header from "../Header";
import Nav from "../Nav";
import ScrollTopButton from "../Button/ScrollTop";
import * as S from "./style";
import { useRouter } from "next/router";
import ProgressBar from "../ProgressBar";

const Proivder = ({ children }: { children: ReactNode }) => {
  const hideHeader = useRecoilValue(HideHeaderAtom);
  const hideNav = useRecoilValue(HideNavAtom);
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      {router.pathname !== "/callback" && <ScrollTopButton />}
      <S.Container>
        <ProgressBar />
        {!hideHeader && <Header />}
        <S.Wrapper hideHeader={hideHeader}>
          <>{children}</>
          {!hideNav && <Nav />}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Proivder;
