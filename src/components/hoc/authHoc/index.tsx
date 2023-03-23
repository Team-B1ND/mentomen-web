import React, { ComponentType } from "react";
import useTokenCheck from "../../../hooks/Auth/useTokenCheck";

const AuthHoc = () => {
  const AuthCheck = (AuthComponent: ComponentType) => {
    const { isAuthority } = useTokenCheck();

    if (!isAuthority) {
      window.alert("유효한 토큰");
      window.location.href = "/start";
    }
    return <AuthComponent />;
  };
  return AuthCheck;
};

export default AuthHoc;
