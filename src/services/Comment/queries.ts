import { AxiosError } from "axios";
import { UseBaseQueryResult, useQuery, UseQueryOptions } from "react-query";
import { getCommentResponse } from "@/src/types/Comment/comment.type";
import CommentApi from "./api";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";

export const useGetCommentQuery = (
  postId: number,
  options?: UseQueryOptions<
    getCommentResponse,
    AxiosError,
    getCommentResponse,
    (string | number)[]
  >
): UseBaseQueryResult<getCommentResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Comment.getComment(postId),
    () => CommentApi.getCommentApi(postId),
    {
      ...options,
      enabled: !!postId,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
