import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";
import { ListPatchItem, PostSubmitType } from "@/src/types/List/list.type";
import { ListResponse, ListItemResponse } from "@/src/types/List/list.type";

class PostApi {
  public async getAllPostApi(): Promise<ListItemResponse> {
    const { data } = await MenToMenAxios.get("/post/read-all");
    return data;
  }

  public async postSubmitApi(data: PostSubmitType): Promise<void> {
    await MenToMenAxios.post("/post/submit", data);
  }

  public async getPostByIdApi(postId: number): Promise<ListResponse> {
    const { data } = await MenToMenAxios.get(`post/read-one/${postId}`);
    return data;
  }

  public async getPostByTagApi(tag: string): Promise<ListItemResponse> {
    const { data } = await MenToMenAxios.get(`post/read-all/${tag}`);
    return data;
  }

  public async getPostByKeyWordApi(keyword: string): Promise<ListItemResponse> {
    const { data } = await MenToMenAxios.get(`post/search/${keyword}`);
    return data;
  }

  public async patchPostApi(data: ListPatchItem): Promise<void> {
    await MenToMenAxios.patch("post/update", data);
  }

  public async deletePostApi(postId: number): Promise<void> {
    await MenToMenAxios.delete(`/post/delete/${postId}`);
  }
}

export default new PostApi();
