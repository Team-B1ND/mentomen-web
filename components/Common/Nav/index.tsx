import { useRouter } from "next/router";
import Profile from "./Profile";
import QRcode from "./QRcode";
import RequestMento from "./RequestMento";
import * as S from "./style";
import Tag from "./Tag";

const Nav = () => {
  const router = useRouter();
  return (
    <S.AsideContainer>
      {router.pathname === "/mypage" ? <Profile /> : <Tag />}
      <RequestMento />
      <QRcode />
    </S.AsideContainer>
  );
};

export default Nav;
