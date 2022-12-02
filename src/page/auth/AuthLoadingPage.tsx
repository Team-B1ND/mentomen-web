import React from "react";
import useSignup from "../../Hooks/login/useSignup";

function AuthLoadingPage() {
  const { request } = useSignup();
  return <div>authLoadingPage</div>;
}

export default AuthLoadingPage;
