import { ResponseType } from "../common/common.type";

export interface LoginResponse extends ResponseType {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
