import Header from "../Common/Header";
import Nav from "../Common/Nav";
import * as S from "./style";
import { useRouter } from "next/router";
import { GlobalStyle, PropsWithChildren } from "@/src/stories/core";
import { PageProgressBar, ScrollTopButton } from "@/src/stories/ui";
import { useHideHeaderOrNav } from "@/src/hooks/HideHeaderOrNav";

const Proivder = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { handleIsHideHeader, handleIsHideNav } = useHideHeaderOrNav(
    router.pathname
  );

  return (
    <>
      <GlobalStyle />
      <S.Container>
        {router.pathname !== "/callback" && <ScrollTopButton />}
        <PageProgressBar />
        {!handleIsHideHeader() && <Header />}
        <S.Wrapper hideHeader={handleIsHideHeader()}>
          <>{children}</>
          {!handleIsHideNav() && <Nav />}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Proivder;
