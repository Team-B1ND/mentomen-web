import {
  HeaderContainer,
  Intro,
  HeaderSearchBox,
  HeaderSearchImg,
  HeaderSearchInput,
  Title,
} from "./header.style";
import Logo from "../../../assets/logo/Logo.png";
import Search from "../../../assets/images/Search.png";
import { useGetMember } from "../../../querys/member/member.query";

function Header() {
  const { data } = useGetMember();
  return (
    <HeaderContainer>
      <Title onClick={() => (window.location.href = "/")} src={Logo} />
      <HeaderSearchBox>
        <HeaderSearchImg src={Search} />
        <HeaderSearchInput placeholder="키워드를 입력하세요" />
      </HeaderSearchBox>
      <Intro onClick={() => (window.location.href = "/intro")}>
        서비스 소개
      </Intro>
    </HeaderContainer>
  );
}

export default Header;
