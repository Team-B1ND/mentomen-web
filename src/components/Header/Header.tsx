import {
  HeaderContainer,
  Intro,
  SearchBox,
  SearchImg,
  SearchInput,
  Title,
} from "./Header.style";
import Logo from "../../Img/Logo.png";
import Search from "../../Img/Search.png";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HeaderContainer>
      <Title src={Logo} />
      <SearchBox>
        <SearchImg src={Search} />
        <SearchInput />
      </SearchBox>
      <Intro>서비스 소개</Intro>
    </HeaderContainer>
  );
};

export default Header;
