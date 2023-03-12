import { useMutation, useQuery } from "react-query";
import CommentRepository from "../../repository/comment/comment.repository";
import {
  patchCommentType,
  postCommentType,
} from "../../types/comment/comment.type";
import { ParamType } from "../../types/param/param.type";

export const usePostComment = () => {
  const mutation = useMutation(
    "comment/submit",
    ({ content, postId }: postCommentType) =>
      CommentRepository.postComment({ content, postId })
  );

  return mutation;
};

export const useGetComment = ({ postId }: ParamType) =>
  useQuery(["comment/read", postId], () =>
    CommentRepository.getComment({ postId })
  );

export const usePatchComment = () => {
  const mutation = useMutation(
    "comment/update",
    ({ commentId, content }: patchCommentType) =>
      CommentRepository.patchComment({ commentId, content })
  );

  return mutation;
};
export const useDeleteComment = () => {
  const mutation = useMutation("comment/delete", ({ postId }: ParamType) =>
    CommentRepository.deleteComment({ postId })
  );
  return mutation;
};
