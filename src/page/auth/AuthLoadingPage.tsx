import useLogin from "../../hooks/login/useLogin";

function AuthLoadingPage() {
  useLogin();

  return <div>authLoadingPage</div>;
}

export default AuthLoadingPage;
