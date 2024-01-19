import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { HideHeaderAtom, HideNavAtom } from "@/stores/common/common.store";
import GlobalStyle from "@/style/globalStyle";
import Header from "../Header";
import Nav from "../Nav";
import Portal from "@/components/Modal/Portal";
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
