import { useRouter } from "next/router";
import { useEffect } from "react";
import { ACCESS_KEY, REFRESH_KEY } from "../../constants/Auth/auth.constant";
import token from "../../lib/token/token";

export const useTokenCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = () => {
      const accessToken = token.getCookie(ACCESS_KEY);
      const refreshToken = token.getCookie(REFRESH_KEY);

      if (!accessToken || !refreshToken) {
        window.alert("로그인이 필요한 서비스입니다.");
        router.push("/start");
      }
    };
    checkToken();
  }, []);
};
