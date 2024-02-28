import { useRecoilValue } from "recoil";
import { HideHeaderAtom, HideNavAtom } from "@/src/store/common/common.store";
import Header from "../ui/Header";
import Nav from "../ui/Nav";
import * as S from "./style";
import { useRouter } from "next/router";
import { GlobalStyle, PropsWithChildren } from "@/src/stories/core";
import { PageProgressBar, ScrollTopButton } from "@/src/stories/ui";

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
