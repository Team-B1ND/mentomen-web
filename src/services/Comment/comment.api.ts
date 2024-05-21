import type {
  CommentDataType,
  patchCommentType,
  postCommentType,
} from "@/src/stories/core";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";

export const CommentApi = {
  getCommentByPostId: async (postId: number): Promise<CommentDataType> => {
    const { data } = await MenToMenAxios.get(`/comment/read/${postId}`);
    return data;
  },

  postComment: async ({ content, postId }: postCommentType): Promise<void> => {
    await MenToMenAxios.post("/comment/submit", {
      content,
      postId,
    });
  },

  patchComment: async ({
    commentId,
    content,
  }: patchCommentType): Promise<void> => {
    await MenToMenAxios.patch(`/comment/update`, {
      commentId,
      content,
    });
  },

  deleteCommentByCommentId: async (commentId: number): Promise<void> => {
    await MenToMenAxios.delete(`/comment/delete/${commentId}`);
  },
};
