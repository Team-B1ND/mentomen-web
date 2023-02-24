import CONFIG from "../../config/config.json";
import { customAxios } from "../../lib/axios/customAxios";
import { UserResponse } from "../../types/user/user.type";
import { ListResponse } from "../../types/list/list.type"; 
import { ParamType } from "../../types/param/param.type";

class UserRepository {
  public async getUser(): Promise<UserResponse> {
    const { data } = await customAxios.get(`/user/my`);
    return data;
  }

  public async getApost({postId}:ParamType):Promise<ListResponse>{
    const { data } = await customAxios.get(`post/read-one/${postId}`);
    return data;
  }
}

export default new UserRepository();
