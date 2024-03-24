import axios, { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/src/constants/Auth/auth.constant";
import token from "../token/token";
import { MenToMenAxios } from "./MenToMenAxios";

export const responseHandler = async (error: AxiosError) => {
  const access_token = token.getCookie(ACCESS_TOKEN_KEY);
  const refresh_token = token.getCookie(REFRESH_TOKEN_KEY);

  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (access_token && refresh_token && status === 401) {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refreshToken`,
          {
            headers: {
              [REQUEST_TOKEN_KEY]: `Bearer ${refresh_token}`,
            },
          }
        );

        token.setCookie(ACCESS_TOKEN_KEY, data.data.accessToken);

        MenToMenAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${data.data.accessToken}`;

        return MenToMenAxios(originalRequest);
      } catch (e) {
        token.removeCookie(ACCESS_TOKEN_KEY);
        token.removeCookie(REFRESH_TOKEN_KEY);

        window.alert("토큰이 만료되었습니다, 다시 로그인 해주세요!");
        window.location.href = "/";
      }
    }
  }

  return Promise.reject(error);
};
