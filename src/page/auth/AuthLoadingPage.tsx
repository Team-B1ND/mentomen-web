import useLogin from "../../hooks/auth/useLogin";

function AuthLoadingPage() {
  useLogin();

  return <div>authLoadingPage</div>;
}

export default AuthLoadingPage;
