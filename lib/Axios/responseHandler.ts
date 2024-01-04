import axios, { AxiosError } from "axios";
import CONFIG from "@/config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/Auth/auth.constant";
import token from "../token/token";
import { customAxios } from "./customAxios";

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
        const { data } = await axios.get(`${CONFIG.server}/auth/refreshToken`, {
          headers: {
            [REQUEST_TOKEN_KEY]: `Bearer ${refresh_token}`,
          },
        });

        token.setCookie(ACCESS_TOKEN_KEY, data.data.accessToken);

        customAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${data.data.accessToken}`;

        return customAxios(originalRequest);
      } catch (e) {
        token.removeCookie(ACCESS_TOKEN_KEY);
        token.removeCookie(REFRESH_TOKEN_KEY);
        window.alert("토큰이 만료되었습니다!");
        window.location.href = "/start";
      }
    }
  }
  return Promise.reject(error);
};
