import {
  PostItemResponse,
  PostPatchItem,
  PostResponse,
  PostSubmitType,
} from "@/src/stories/core";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";

export const PostApi = {
  getAllPost: async (): Promise<PostItemResponse> => {
    const { data } = await MenToMenAxios.get("/post/read-all");
    return data;
  },

  getPostById: async (postId: number): Promise<PostResponse> => {
    const { data } = await MenToMenAxios.get(`post/read-one/${postId}`);
    return data;
  },

  getPostByTag: async (tag: string): Promise<PostItemResponse> => {
    const { data } = await MenToMenAxios.get(`post/read-all/${tag}`);
    return data;
  },

  getPostByKeyWord: async (keyword: string): Promise<PostItemResponse> => {
    const { data } = await MenToMenAxios.get(`post/search/${keyword}`);
    return data;
  },

  registPost: async (data: PostSubmitType): Promise<void> => {
    await MenToMenAxios.post("/post/submit", data);
  },

  patchPost: async (data: PostPatchItem): Promise<void> => {
    await MenToMenAxios.patch("post/update", data);
  },

  deletePost: async (postId: number): Promise<void> => {
    await MenToMenAxios.delete(`/post/delete/${postId}`);
  },
};
