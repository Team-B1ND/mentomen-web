import { patchCommentType, postCommentType } from "@/src/stories/core";
import { useMutation } from "react-query";
import CommentApi from "./api";

export const usePostCommentMutation = () => {
  const mutation = useMutation(({ content, postId }: postCommentType) =>
    CommentApi.postCommentApi({ content, postId })
  );
  return mutation;
};

export const usePatchCommentMutation = () => {
  const mutation = useMutation(({ commentId, content }: patchCommentType) =>
    CommentApi.patchCommentApi({ commentId, content })
  );

  return mutation;
};

export const useDeleteCommentMutation = () => {
  const mutation = useMutation((commentId: number) =>
    CommentApi.deleteCommentApi(commentId)
  );
  return mutation;
};
