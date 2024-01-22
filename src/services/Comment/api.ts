import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";
import {
  postCommentType,
  CommentDataType,
  patchCommentType,
} from "@/src/types/Comment/comment.type";

class CommentApi {
  public async postCommentApi({
    content,
    postId,
  }: postCommentType): Promise<void> {
    await MenToMenAxios.post("/comment/submit", {
      content,
      postId,
    });
  }

  public async getCommentApi(postId: number): Promise<CommentDataType> {
    const { data } = await MenToMenAxios.get(`/comment/read/${postId}`);
    return data;
  }

  public async patchCommentApi({
    commentId,
    content,
  }: patchCommentType): Promise<void> {
    await MenToMenAxios.patch(`/comment/update`, {
      commentId,
      content,
    });
  }

  public async deleteCommentApi(commentId: number): Promise<void> {
    await MenToMenAxios.delete(`/comment/delete/${commentId}`);
  }
}

export default new CommentApi();
