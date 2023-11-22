import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { HideHeaderAtom } from "../../../stores/Header/header.store";
import { HideNavAtom } from "../../../stores/Nav/nav.store";
import { NOTICE } from "../../../stores/Notice/noticeAtom";
import GlobalStyle from "../../../style/Global";
import Notice from "../../Notice";
import Header from "../Header";
import Nav from "../Nav";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  const noticeModal = useRecoilValue(NOTICE);
  const hideHeader = useRecoilValue(HideHeaderAtom);
  const hideNav = useRecoilValue(HideNavAtom);

  return (
    <>
      <GlobalStyle />
      <Container>
        {!hideHeader && <Header />}
        <Wrapper>
          {!hideNav && <Nav />}
          <Content>{children}</Content>
        </Wrapper>
      </Container>
      {noticeModal && <Notice />}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 75px;
  background-color: #f2f2f2;
`;

export default PageTemplate;
