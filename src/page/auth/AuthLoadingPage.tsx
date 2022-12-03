import React from "react";
import useSignup from "../../hooks/login/useLogin";

function AuthLoadingPage() {
  const { request } = useSignup();
  return <div>authLoadingPage</div>;
}

export default AuthLoadingPage;
