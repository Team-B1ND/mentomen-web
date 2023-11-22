import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { NOTICE } from "../../../recoil/Notice/noticeAtom";
import GlobalStyle from "../../../style/Global";
import Notice from "../../Notice";
import Header from "../Header/header";
import ProfileBar from "../Profile";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  const noticeModal = useRecoilValue(NOTICE);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Wrapper>
          <ProfileBar />
          <ListContainer>{children}</ListContainer>
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

export const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 75px;
  background-color: #f2f2f2;
`;

export default PageTemplate;
