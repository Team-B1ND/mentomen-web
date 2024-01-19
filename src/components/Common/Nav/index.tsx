import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import token from "@/lib/token/token";
import { useRouter } from "next/router";
import Profile from "./Profile";
import QRcode from "./QRcode";
import RequestMento from "./RequestMentor";
import * as S from "./style";
import SuggestSignIn from "./SuggestSignIn";
import Tag from "./Tag";

const Nav = () => {
  const router = useRouter();
  return (
    <S.AsideContainer>
      {router.pathname === "/mypage" ? <Profile /> : <Tag />}
      {token.getCookie(ACCESS_TOKEN_KEY) ? <RequestMento /> : <SuggestSignIn />}
      <QRcode />
    </S.AsideContainer>
  );
};

export default Nav;
