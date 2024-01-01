import { customAxios } from "../../lib/Axios/customAxios";
import {
  postCommentType,
  getCommentResponse,
  patchCommentType,
} from "../../types/Comment/comment.type";

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

  public async getComment(postId: number): Promise<getCommentResponse> {
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

  public async deleteComment(commentId: number): Promise<void> {
    await customAxios.delete(`/comment/delete/${commentId}`);
  }
}

export default new CommentRepository();
