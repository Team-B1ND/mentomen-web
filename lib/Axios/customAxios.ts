import axios from "axios";
import { ACCESS_KEY, REQUEST_KEY } from "../../constants/Auth/auth.constant";
import CONFIG from "../../config/config.json";
import { requestHandler } from "./requestHandler";
import { responseHandler } from "./responseHandler";
import token from "../token/token";

export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  headers: {
    [REQUEST_KEY]: `Bearer ${token.getCookie(ACCESS_KEY)}`,
  },
});

customAxios.interceptors.request.use(requestHandler, (response) => response);
customAxios.interceptors.response.use((response) => response, responseHandler);
