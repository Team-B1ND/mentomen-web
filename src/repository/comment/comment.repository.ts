import { customAxios } from "../../lib/axios/customAxios";
import {
  postCommentType,
  getCommentResponse,
  patchCommentType,
} from "../../types/comment/comment.type";
import { ParamType } from "../../types/param/param.type";

class CommentRepository {
  public async postComment({
    content,
    postId,
  }: postCommentType): Promise<void> {
    await customAxios.post("/comment/submit", {
      content,
      postId,
    });
  }

  public async getComment({ postId }: ParamType): Promise<getCommentResponse> {
    const { data } = await customAxios.get(`/comment/read/${postId}`);
    return data;
  }

  public async patchComment({
    commentId,
    content,
  }: patchCommentType): Promise<void> {
    await customAxios.patch(`/comment/update`, {
      commentId,
      content,
    });
  }

  public async deleteComment({ postId }: ParamType): Promise<void> {
    await customAxios.delete(`/comment/delete/${postId}`);
  }
}

export default new CommentRepository();
