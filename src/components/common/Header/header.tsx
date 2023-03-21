import {
  HeaderContainer,
  HeaderSearchBox,
  HeaderSearchImg,
  HeaderSearchInput,
  HeaderTitle,
  HeaderIntro,
} from "./header.style";
import Logo from "../../../assets/logo/Logo.png";
import Search from "../../../assets/images/Search.png";
import { useNavigate } from "react-router-dom";
import { useKeyWordSearch } from "../../../hooks/header/search/useKeyWordSearch";

function Header() {
  const navigate = useNavigate();
  const {onKeyPress, onChange,search} = useKeyWordSearch();

  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => navigate("/")} src={Logo} />
      <HeaderSearchBox>
        <HeaderSearchImg src={Search} />
        <HeaderSearchInput 
          placeholder="키워드를 입력하세요" 
          type='text' 
          value={search} 
          onChange={onChange} 
          onKeyPress={onKeyPress}/>
      </HeaderSearchBox>
      <HeaderIntro onClick={() => navigate("/intro")}>서비스 소개</HeaderIntro>
    </HeaderContainer>
  );
}

export default Header;
