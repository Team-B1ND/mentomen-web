import { AxiosRequestConfig } from "axios";
import token from "../token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/src/constants/Auth/auth.constant";

export const requestHandler = (config: AxiosRequestConfig) => {
  const access_token = token.getCookie(ACCESS_TOKEN_KEY);
  const refresh_token = token.getCookie(REFRESH_TOKEN_KEY);

  if (access_token || refresh_token) {
    config.headers = {
      "Content-Type": "application/json",
      [REQUEST_TOKEN_KEY]: `Bearer ${token.getCookie(ACCESS_TOKEN_KEY)}`,
    };
  }

  return config;
};
