import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import { customAxios } from "@/lib/Axios/customAxios";
import token from "@/lib/token/token";
import { ListItemResponse } from "@/types/List/list.type";
import { UserResponse } from "@/types/User/user.type";

class UserRepository {
  public async getMyInfo(): Promise<UserResponse | void> {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await customAxios.get(`/user/my`);
      return data;
    }
    return;
  }

  public async getMyPost(): Promise<ListItemResponse> {
    const { data } = await customAxios.get(`/user/post`);
    return data;
  }
}

export default new UserRepository();
