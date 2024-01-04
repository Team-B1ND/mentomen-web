import { customAxios } from "@/lib/Axios/customAxios";
import { ListItemResponse } from "@/types/List/list.type";
import { UserResponse } from "@/types/User/user.type";

class UserRepository {
  public async getMyInfo(): Promise<UserResponse> {
    const { data } = await customAxios.get(`/user/my`);
    return data;
  }

  public async getMyPost(): Promise<ListItemResponse> {
    const { data } = await customAxios.get(`/user/post`);
    return data;
  }
}

export default new UserRepository();
