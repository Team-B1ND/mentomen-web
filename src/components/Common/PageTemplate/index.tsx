import { Portal } from "@stubee2/stubee2-rolling-ui";
import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  HideHeaderAtom,
  HideNavAtom,
} from "../../../stores/common/common.store";
import { IsActiveDetailAtom } from "../../../stores/Detail/detail.store";
import flex from "../../../style/flex";
import GlobalStyle from "../../../style/Global";
import Detail from "../../Modal/Detail";
import Header from "../Header";
import Nav from "../Nav";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeaderAtom);
  const hideNav = useRecoilValue(HideNavAtom);
  const [isActiveDetail, setIsActiveDetail] =
    useRecoilState(IsActiveDetailAtom);

  return (
    <>
      <GlobalStyle />
      <Container>
        {!hideHeader && <Header />}
        <Wrapper>
          {!hideNav && <Nav />}
          <Content hideHeader={hideHeader}>{children}</Content>
        </Wrapper>
      </Container>

      {isActiveDetail && (
        <Portal id="modal">
          <Detail setIsActiveDetail={setIsActiveDetail} />
        </Portal>
      )}
    </>
  );
}

const Container = styled.div`
  ${flex({ flexDirection: "column" })}
`;

const Wrapper = styled.div`
  ${flex({ alignItems: "center" })}
`;

export const Content = styled.div<{ hideHeader: boolean }>`
  width: 100%;
  height: 100vh;
  padding-top: ${({ hideHeader }) => !hideHeader && "75px"};
  background-color: #fff;
`;

export default PageTemplate;
