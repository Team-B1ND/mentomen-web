import { ACCESS_KEY, REFRESH_KEY } from "../../constants/Auth/auth.constant";
import authRepository from "../../repositories/Auth/auth.repository";
import { useEffect } from "react";
import queryString from "query-string";
import token from "@/lib/token/token";
import { useRouter } from "next/router";

export const useLogin = () => {
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

          token.setCookie(ACCESS_KEY, data.accessToken);
          token.setCookie(REFRESH_KEY, data.refreshToken);
          router.push("/");
        } catch (e) {}
      };
      request();
    }
  }, []);
};
