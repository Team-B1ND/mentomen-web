import { customAxios } from "../../lib/Axios/customAxios";
import { ListPatchItem, PostSubmitType } from "../../types/List/list.type";
import { ListResponse, ListItemResponse } from "../../types/List/list.type";
import { ParamType } from "../../types/Param/param.type";
import { TagType, KeyWordType } from "../../types/List/list.type";

class ListRepository {
  public async getPost(): Promise<ListItemResponse> {
    const { data } = await customAxios.get("/post/read-all");
    return data;
  }

  public async postMySubmit(data: PostSubmitType): Promise<void> {
    await customAxios.post("/post/submit", data);
  }

  public async getPostById({ postId }: ParamType): Promise<ListResponse> {
    const { data } = await customAxios.get(`post/read-one/${postId}`);
    return data;
  }

  public async getPostByTag({ tag }: TagType): Promise<ListItemResponse> {
    const { data } = await customAxios.get(`post/read-all/${tag}`);
    return data;
  }

  public async getPostByKeyWord({
    keyword,
  }: KeyWordType): Promise<ListItemResponse> {
    const { data } = await customAxios.get(`post/search/${keyword}`);
    return data;
  }

  public async patchMyPost(data: ListPatchItem): Promise<void> {
    await customAxios.patch("post/update", data);
  }
}

export default new ListRepository();
