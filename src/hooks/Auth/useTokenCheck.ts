import { MenToMenToast } from "@/src/util/Toast/menToMenToast";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/src/constants/Auth/auth.constant";
import token from "@/src/lib/token/token";

const useTokenCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = () => {
      const accessToken = token.getCookie(ACCESS_TOKEN_KEY);
      const refreshToken = token.getCookie(REFRESH_TOKEN_KEY);

      if (!accessToken || !refreshToken) {
        MenToMenToast.showInfo("로그인이 필요한 서비스입니다.");
        router.push("/");
      }
    };
    checkToken();
  }, [router]);
};

export default useTokenCheck;
