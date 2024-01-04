import { AxiosError } from "axios";
import {
  UseBaseQueryResult,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";
import CommentRepository from "@/repositories/Comment/comment.repository";
import {
  getCommentResponse,
  patchCommentType,
  postCommentType,
} from "@/types/Comment/comment.type";

export const usePostCommentMutation = () => {
  const mutation = useMutation(({ content, postId }: postCommentType) =>
    CommentRepository.postComment({ content, postId })
  );

  return mutation;
};

export const useGetCommentQuery = (
  postId: number,
  options?: UseQueryOptions<
    getCommentResponse,
    AxiosError,
    getCommentResponse,
    ["comment/read", number]
  >
): UseBaseQueryResult<getCommentResponse, AxiosError> =>
  useQuery(
    ["comment/read", postId],
    () => CommentRepository.getComment(postId),
    {
      ...options,
      enabled: !!postId,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );

export const usePatchCommentMutation = () => {
  const mutation = useMutation(({ commentId, content }: patchCommentType) =>
    CommentRepository.patchComment({ commentId, content })
  );

  return mutation;
};
export const useDeleteCommentMutation = () => {
  const mutation = useMutation((commentId: number) =>
    CommentRepository.deleteComment(commentId)
  );
  return mutation;
};
