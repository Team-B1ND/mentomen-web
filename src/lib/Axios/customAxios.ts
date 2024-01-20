import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/src/constants/Auth/auth.constant";
import { requestHandler } from "./requestHandler";
import { responseHandler } from "./responseHandler";
import token from "../token/token";

export const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getCookie(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.request.use(requestHandler, (response) => response);
customAxios.interceptors.response.use((response) => response, responseHandler);
