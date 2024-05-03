import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { Column } from "@/src/stories/layout";
import token from "@/src/libs/token/token";
import { useRouter } from "next/router";
import styled from "styled-components";
import Profile from "./Profile";
import QRCode from "./QR-Code";
import RequestMento from "./RequestMentor";
import SuggestSignIn from "./SuggestSignIn";
import Tag from "./Tag";

const Nav = () => {
  const router = useRouter();
  return (
    <Aside>
      <Container>
        <Column $width={"100%"} $height={"850px"} $rowGap={"35px"}>
          {router.pathname === "/mypage" ? <Profile /> : <Tag />}
          {token.getCookie(ACCESS_TOKEN_KEY) ? (
            <RequestMento />
          ) : (
            <SuggestSignIn />
          )}
          <QRCode />
        </Column>
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
