import { customAxios } from "@/src/libs/Axios/customAxios";
import {
  postCommentType,
  getCommentResponse,
  patchCommentType,
} from "@/src/types/Comment/comment.type";

class CommentApi {
  public async postCommentApi({
    content,
    postId,
  }: postCommentType): Promise<void> {
    await customAxios.post("/comment/submit", {
      content,
      postId,
    });
  }

  public async getCommentApi(postId: number): Promise<getCommentResponse> {
    const { data } = await customAxios.get(`/comment/read/${postId}`);
    return data;
  }

  public async patchCommentApi({
    commentId,
    content,
  }: patchCommentType): Promise<void> {
    await customAxios.patch(`/comment/update`, {
      commentId,
      content,
    });
  }

  public async deleteCommentApi(commentId: number): Promise<void> {
    await customAxios.delete(`/comment/delete/${commentId}`);
  }
}

export default new CommentApi();
