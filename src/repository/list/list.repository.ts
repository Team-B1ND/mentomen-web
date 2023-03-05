import { customAxios } from "../../lib/axios/customAxios";
import { PostSubmitType } from "../../types/list/list.type";
import { ListResponse, ListItemResponse } from "../../types/list/list.type"; 
import { ParamType } from "../../types/param/param.type";
import { TagType, KeyWordType } from "../../types/list/list.type";

class ListRepository {
  public async getList(): Promise<ListItemResponse> {
    const { data } = await customAxios.get("/post/read-all");
    return data;
  }

  public async postMySubmit(data:PostSubmitType): Promise<void> {
    await customAxios.post('/post/submit',data);
  }

  public async getPostById({postId}:ParamType):Promise<ListResponse>{
    const { data } = await customAxios.get(`post/read-one/${postId}`);
    return data;
  }

  public async getPostByTag({tag}:TagType):Promise<ListItemResponse>{
    const { data } = await customAxios.get(`post/read-all/${tag}`);
    return data;
  }

  public async getPostByKeyWord({keyword}:KeyWordType):Promise<ListItemResponse>{
    const { data } = await customAxios.get(`post/search/${keyword}`);
    return data
  }
}

export default new ListRepository();
