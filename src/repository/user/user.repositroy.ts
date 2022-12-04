import CONFIG from "../../config.json";
import { UserResponse } from "../../interface/user/user.type";
import { customAxios } from "../../lib/axios/customAxios";

class UserRepository {
  public async user(): Promise<UserResponse> {
    const { data } = await customAxios.get(`${CONFIG.server}/user/my`);
    return data;
  }
}

export default new UserRepository();
