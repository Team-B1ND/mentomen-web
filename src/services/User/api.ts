import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";
import token from "@/src/libs/token/token";
import { PostItemResponse } from "@/src/types/Post/post.type";
import { UserResponse } from "@/src/types/User/user.type";

class UserApi {
  public async getMyInfoApi(): Promise<UserResponse | void> {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await MenToMenAxios.get(`/user/my`);
      return data;
    }
    return;
  }

  public async getMyPostApi(): Promise<PostItemResponse> {
    const { data } = await MenToMenAxios.get(`/user/post`);
    return data;
  }
}

export default new UserApi();
