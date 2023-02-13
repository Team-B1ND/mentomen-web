import { useNavigate } from "react-router-dom";
import useTokenCheck from "../../../hooks/auth/useTokenCheck";
import ProfileBar from "../../common/Profile";

const Home = () => {
  const { isAuthority } = useTokenCheck();
  const navigate = useNavigate();
  if (!isAuthority) {
    window.alert("유효한토큰");
    navigate("/start");
  }
  return <ProfileBar />;
};

export default Home;
