import CONFIG from "../../config/config.json";
import { customAxios } from "../../lib/axios/customAxios";
import { UserResponse } from "../../types/user/user.type";
import { PostsType } from "../../types/Posts/posts.type";
import { ParamType } from "../../types/param/param.type";

class UserRepository {
  public async getUser(): Promise<UserResponse> {
    const { data } = await customAxios.get(`/user/my`);
    return data;
  }

  public async getAllPost():Promise<PostsType>{
    const { data } = await customAxios.get(`post/read-all`);
    return data;
  }

  public async getMyPost({postId}:ParamType):Promise<PostsType>{
    const { data } = await customAxios.get(`post/read-one/${postId}`);
    return data;
  }
}

export default new UserRepository();
