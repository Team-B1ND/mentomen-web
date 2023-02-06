import { useNavigate } from "react-router-dom";
import useTokenCheck from "../../../hooks/auth/useTokenCheck";
import ProfileBar from "../../common/profile";

const Home = () => {
  const { isAuthority } = useTokenCheck();
  const navigate = useNavigate();
  if (!isAuthority) {
    window.alert("유효한토큰");
    navigate("/startf");
  }
  return <ProfileBar />;
};

export default Home;
