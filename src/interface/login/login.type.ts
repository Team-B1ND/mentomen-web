import { Response } from "../util/response.type";

export interface LoginResponse extends Response {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
