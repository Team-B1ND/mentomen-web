import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { Flex } from "@/src/stories/layout";
import token from "@/src/libs/token/token";
import { useRouter } from "next/router";
import styled from "styled-components";
import Profile from "./Profile";
import QRcode from "./QRcode";
import RequestMento from "./RequestMentor";
import SuggestSignIn from "./SuggestSignIn";
import Tag from "./Tag";

const Nav = () => {
  const router = useRouter();
  return (
    <Aside>
      <Container>
        <Wrapper>
          {router.pathname === "/mypage" ? <Profile /> : <Tag />}
          {token.getCookie(ACCESS_TOKEN_KEY) ? (
            <RequestMento />
          ) : (
            <SuggestSignIn />
          )}
          <QRcode />
        </Wrapper>
      </Container>
    </Aside>
  );
};

export default Nav;

export const Aside = styled.aside`
  height: 100vh;
  position: sticky;
  top: 100px;
`;

const Container = styled.div`
  width: 300px;
  height: 100%;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 850px;
  ${Flex({ flexDirection: "column", rowGap: "35px" })};
`;
