import { useLogin } from "../../hooks/Auth/useLogin";
import useHideHeader from "../../hooks/Header/useHideHeader";
import useHideNav from "../../hooks/Nav/useHideNav";

function AuthLoadingPage() {
  useLogin();
  useHideHeader();
  useHideNav();
  return <div>로딩 중...</div>;
}

export default AuthLoadingPage;
