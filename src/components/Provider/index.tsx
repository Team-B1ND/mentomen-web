import Header from "../Common/Header";
import Nav from "../Common/Nav";

import { useRouter } from "next/router";
import { GlobalStyle, PropsWithChildren } from "@/src/stories/core";
import { PageProgressBar, ScrollTopButton } from "@/src/stories/ui";
import { useHideHeaderOrNav } from "@/src/hooks/HideHeaderOrNav";
import { Column, Row } from "@/src/stories/layout";
import { css } from "styled-components";

const Proivder = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { handleIsHideHeader, handleIsHideNav } = useHideHeaderOrNav(
    router.pathname
  );

  return (
    <>
      <GlobalStyle />
      <Column
        $alignItems={"center"}
        $customStyle={css`
          min-width: 1020px;
        `}
      >
        {router.pathname !== "/callback" && <ScrollTopButton />}
        <PageProgressBar />
        {!handleIsHideHeader() && <Header />}

        <Row
          $width={"950px"}
          $height={"100%"}
          $justifyContent={"center"}
          $columnGap={"3.6rem"}
          $customStyle={Wrapper(handleIsHideHeader())}
        >
          <>{children}</>
          {!handleIsHideNav() && <Nav />}
        </Row>
      </Column>
    </>
  );
};

export default Proivder;

export const Wrapper = (hideHeader: boolean) => css`
  padding-top: ${!hideHeader && "100px"};
  padding-bottom: ${!hideHeader && "2rem"};
`;
