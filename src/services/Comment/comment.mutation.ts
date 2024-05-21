import { patchCommentType, postCommentType } from "@/src/stories/core";
import { useMutation } from "react-query";
import { CommentApi } from "./comment.api";

export const usePostCommentMutation = () => {
  const mutation = useMutation(({ content, postId }: postCommentType) =>
    CommentApi.postComment({ content, postId })
  );
  return mutation;
};

export const usePatchCommentMutation = () => {
  const mutation = useMutation(({ commentId, content }: patchCommentType) =>
    CommentApi.patchComment({ commentId, content })
  );
  return mutation;
};

export const useDeleteCommentMutation = () => {
  const mutation = useMutation((commentId: number) =>
    CommentApi.deleteCommentByCommentId(commentId)
  );
  return mutation;
};
