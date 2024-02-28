import { useRecoilValue } from "recoil";
import { HideHeaderAtom, HideNavAtom } from "@/src/store/common/common.store";
import GlobalStyle from "@/src/styles/globalStyle";
import Header from "../ui/Header";
import Nav from "../ui/Nav";
import ScrollTopButton from "../ui/ScrollTopButton";
import * as S from "./style";
import { useRouter } from "next/router";
import PageProgressBar from "../ui/PageProgressBar";
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
        <PageProgressBar />
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
