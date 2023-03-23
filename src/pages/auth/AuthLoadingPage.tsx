import useLogin from "../../hooks/Auth/useLogin";

function AuthLoadingPage() {
  useLogin();

  return <div>authLoadingPage</div>;
}

export default AuthLoadingPage;
