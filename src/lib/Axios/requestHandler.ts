import { AxiosRequestConfig } from "axios";
import token from "../token/token";
import {
  ACCESS_KEY,
  REFRESH_KEY,
  REQUEST_KEY,
} from "../../constants/Auth/auth.constant";

export const requestHandler = (config: AxiosRequestConfig) => {
  const access_token = token.getToken(ACCESS_KEY);
  const refresh_token = token.getToken(REFRESH_KEY);

  if (access_token || refresh_token) {
    config.headers = {
      "Content-Type": "application/json",
      [REQUEST_KEY]: `Bearer ${token.getToken(ACCESS_KEY)}`,
    };
  }
  return config;
};
