import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/Auth/auth.constant";
import authRepository from "@/repositories/Auth/auth.repository";
import { useEffect } from "react";
import token from "@/lib/token/token";
import { useRouter } from "next/router";

export const useDAtuhLogin = () => {
  const router = useRouter();
  const { query } = router;
  const { code } = query;

  useEffect(() => {
    if (code) {
      const request = async () => {
        try {
          const { data } = await authRepository.login({
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
