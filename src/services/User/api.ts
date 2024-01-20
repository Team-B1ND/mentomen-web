import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { customAxios } from "@/src/lib/Axios/customAxios";
import token from "@/src/lib/token/token";
import { ListItemResponse } from "@/src/types/List/list.type";
import { UserResponse } from "@/src/types/User/user.type";

class UserApi {
  public async getMyInfoApi(): Promise<UserResponse | void> {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await customAxios.get(`/user/my`);
      return data;
    }
    return;
  }

  public async getMyPostApi(): Promise<ListItemResponse> {
    const { data } = await customAxios.get(`/user/post`);
    return data;
  }
}

export default new UserApi();
