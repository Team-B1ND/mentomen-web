import { useLogin } from "../../hooks/Auth/useLogin";
import useHideHeaderOrNav from "../../hooks/common/useHideHeaderOrNav";

function AuthLoadingPage() {
  useLogin();
  useHideHeaderOrNav("Both");
  return <div>로딩 중...</div>;
}

export default AuthLoadingPage;
