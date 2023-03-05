import CONFIG from "../../config/config.json";
import { customAxios } from "../../lib/axios/customAxios";
import { ListItemResponse } from "../../types/list/list.type";
import { UserResponse } from "../../types/user/user.type";

class UserRepository {
  public async getUser(): Promise<UserResponse> {
    const { data } = await customAxios.get(`/user/my`);
    return data;
  }

  public async myPost(): Promise<ListItemResponse>{
    const { data } = await customAxios.get(`/user/post`);
    return data;
  }

}

export default new UserRepository();
