import {
  HeaderContainer,
  Intro,
  SearchBox,
  SearchImg,
  SearchInput,
  Title,
} from "./header.style";
import Logo from "../../../assets/logo/Logo.png";
import Search from "../../../assets/images/Search.png";
import { useState } from "react";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HeaderContainer>
      <Title onClick={() => (window.location.href = "/")} src={Logo} />
      <SearchBox>
        <SearchImg src={Search} />
        <SearchInput placeholder="키워드를 입력하세요" />
      </SearchBox>
      <Intro onClick={() => (window.location.href = "/intro")}>
        서비스 소개
      </Intro>
    </HeaderContainer>
  );
}

export default Header;
