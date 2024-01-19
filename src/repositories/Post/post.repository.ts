import { customAxios } from "@/lib/Axios/customAxios";
import { ListPatchItem, PostSubmitType } from "@/types/List/list.type";
import { ListResponse, ListItemResponse } from "@/types/List/list.type";

class ListRepository {
  public async getAllPost(): Promise<ListItemResponse> {
    const { data } = await customAxios.get("/post/read-all");
    return data;
  }

  public async postSubmit(data: PostSubmitType): Promise<void> {
    await customAxios.post("/post/submit", data);
  }

  public async getPostById(postId: number): Promise<ListResponse> {
    const { data } = await customAxios.get(`post/read-one/${postId}`);
    return data;
  }

  public async getPostByTag(tag: string): Promise<ListItemResponse> {
    const { data } = await customAxios.get(`post/read-all/${tag}`);
    return data;
  }

  public async getPostByKeyWord(keyword: string): Promise<ListItemResponse> {
    const { data } = await customAxios.get(`post/search/${keyword}`);
    return data;
  }

  public async patchPost(data: ListPatchItem): Promise<void> {
    await customAxios.patch("post/update", data);
  }

  public async deletePost(postId: number): Promise<void> {
    await customAxios.delete(`/post/delete/${postId}`);
  }
}

export default new ListRepository();
