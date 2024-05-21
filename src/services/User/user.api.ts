import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { PostItemResponse, UserResponse } from "@/src/stories/core";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";
import token from "@/src/libs/token/token";

export const UserApi = {
  getMyInfo: async (): Promise<UserResponse | void> => {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await MenToMenAxios.get("/user/my");
      return data;
    }
    return;
  },

  getMyPost: async (): Promise<PostItemResponse> => {
    const { data } = await MenToMenAxios.get("/user/post");
    return data;
  },
};
