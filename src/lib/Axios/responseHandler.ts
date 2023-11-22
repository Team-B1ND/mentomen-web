import axios, { AxiosError } from "axios";
import CONFIG from "../../config/config.json";
import {
  ACCESS_KEY,
  REFRESH_KEY,
  REQUEST_KEY,
} from "../../constants/Auth/auth.constant";
import token from "../token/token";
import { customAxios } from "./customAxios";

export const responseHandler = async (error: AxiosError) => {
  const access_token = token.getToken(ACCESS_KEY);
  const refresh_token = token.getToken(REFRESH_KEY);
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (access_token && refresh_token && status === 401) {
      try {
        const { data } = await axios.get(`${CONFIG.server}/auth/refreshToken`, {
          headers: {
            [REQUEST_KEY]: `Bearer ${refresh_token}`,
          },
        });

        token.setToken(ACCESS_KEY, data.data.accessToken);

        customAxios.defaults.headers.common[
          REQUEST_KEY
        ] = `Bearer ${data.data.accessToken}`;

        return customAxios(originalRequest);
      } catch (e) {
        token.clearToken();
        window.alert("토큰이 만료되었습니다!");
        window.location.href = "/";
      }
    }
  }
  return Promise.reject(error);
};
