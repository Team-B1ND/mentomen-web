import { LoginResponse } from "@/src/stories/core";
import axios from "axios";

export const AuthApi = {
  postLogin: async (code: string): Promise<LoginResponse> => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/code`,
      {
        code,
      }
    );
    return data;
  },
};
