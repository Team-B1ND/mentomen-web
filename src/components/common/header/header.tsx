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
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Title onClick={() => navigate("/")} src={Logo} />
      <HeaderSearchBox>
        <HeaderSearchImg src={Search} />
        <HeaderSearchInput placeholder="키워드를 입력하세요" />
      </HeaderSearchBox>
      <Intro onClick={() => navigate("/intro")}>서비스 소개</Intro>
    </HeaderContainer>
  );
}

export default Header;
