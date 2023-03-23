import { AxiosError } from "axios";
import {
  UseBaseQueryResult,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";
import CommentRepository from "../../repository/Comment/comment.repository";
import {
  getCommentResponse,
  patchCommentType,
  postCommentType,
} from "../../types/Comment/comment.type";
import { ParamType } from "../../types/Param/param.type";

export const usePostComment = () => {
  const mutation = useMutation(
    "comment/submit",
    ({ content, postId }: postCommentType) =>
      CommentRepository.postComment({ content, postId })
  );

  return mutation;
};

export const useGetComment = (
  { postId }: ParamType,
  options?: UseQueryOptions<
    getCommentResponse,
    AxiosError,
    getCommentResponse,
    ["comment/read", number]
  >
): UseBaseQueryResult<getCommentResponse, AxiosError> =>
  useQuery(
    ["comment/read", postId],
    () => CommentRepository.getComment({ postId }),
    {
      ...options,
      enabled: !!postId,
    }
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
