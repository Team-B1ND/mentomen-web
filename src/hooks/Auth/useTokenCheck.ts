import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/src/constants/Auth/auth.constant";
import token from "@/src/libs/token/token";
import { MenToMenToast } from "../../stories/utils";

export const useTokenCheck = () => {
  const router = useRouter();
  const accessKey = ACCESS_TOKEN_KEY;
  const refreshKey = REFRESH_TOKEN_KEY;

  useEffect(() => {
    const checkToken = () => {
      if (!token.getCookie(accessKey) || !token.getCookie(refreshKey)) {
        [accessKey, refreshKey].map((key) => token.removeCookie(key));
        MenToMenToast.showInfo("로그인이 필요한 서비스입니다.");
        router.push("/");
      }
    };
    checkToken();
  }, [router]);
};
