import { useRecoilValue } from "recoil";
import { HideHeaderAtom, HideNavAtom } from "@/src/stores/common/common.store";
import GlobalStyle from "@/src/styles/globalStyle";
import Header from "../Header";
import Nav from "../Nav";
import ScrollTopButton from "../Button/ScrollTop";
import * as S from "./style";
import { useRouter } from "next/router";
import ProgressBar from "../ProgressBar";
import { PropsWithChildren } from "@/src/types/common/common.type";

const Proivder = ({ children }: PropsWithChildren) => {
  const hideHeader = useRecoilValue(HideHeaderAtom);
  const hideNav = useRecoilValue(HideNavAtom);
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <S.Container>
        {router.pathname !== "/callback" && <ScrollTopButton />}
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
