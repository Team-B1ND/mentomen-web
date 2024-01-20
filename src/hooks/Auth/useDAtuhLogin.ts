import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/src/constants/Auth/auth.constant";
import { useEffect } from "react";
import token from "@/src/lib/token/token";
import { useRouter } from "next/router";
import AuthApi from "@/src/services/Auth/api";

export const useDAtuhLogin = () => {
  const router = useRouter();
  const { query } = router;
  const { code } = query;

  useEffect(() => {
    if (code) {
      const request = async () => {
        try {
          const { data } = await AuthApi.loginApi({
            code: code.toString(),
          });

          token.setCookie(ACCESS_TOKEN_KEY, data.accessToken);
          token.setCookie(REFRESH_TOKEN_KEY, data.refreshToken);
          window.location.replace("/");
          router.push("/");
        } catch (e) {}
      };
      request();
    }
  }, [code, router]);
};
