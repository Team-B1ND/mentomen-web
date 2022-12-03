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
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Title onClick={() => navigate("/")} src={Logo} />
      <SearchBox>
        <SearchImg src={Search} />
        <SearchInput placeholder="키워드를 입력하세요" />
      </SearchBox>
      <Intro onClick={() => navigate("/intro")}>서비스 소개</Intro>
    </HeaderContainer>
  );
};

export default Header;
