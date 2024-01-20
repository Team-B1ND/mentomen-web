import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import PostRepository from "@/src/repositories/Post/post.repository";
import {
  ListPatchItem,
  ListResponse,
  PostSubmitType,
} from "@/src/types/List/list.type";
import { ListItemResponse } from "@/src/types/List/list.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";

export const useGetList = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string
  >
): UseQueryResult<ListItemResponse, AxiosError> => {
  return useQuery(QUERY_KEYS.Post.getList, () => PostRepository.getAllPost(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
};

export const useGetApost = (
  postId: number,
  options?: UseQueryOptions<
    ListResponse,
    AxiosError,
    ListResponse,
    (string | number)[]
  >
): UseQueryResult<ListResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Post.getApost(postId),
    () => PostRepository.getPostById(postId),
    {
      ...options,
      enabled: !!postId,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePostMySubmitMutation = () => {
  const mutation = useMutation((data: PostSubmitType) =>
    PostRepository.postSubmit(data)
  );
  return mutation;
};

export const useGetTag = (
  tag: string,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string[]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Post.getTag(tag),
    () => PostRepository.getPostByTag(tag),
    {
      ...options,
      enabled: !!tag,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetKeyWord = (
  keyword: string,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string[]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Post.getKeyWord(keyword),
    () => PostRepository.getPostByKeyWord(keyword),
    {
      ...options,
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePatchMyPostMutation = () => {
  const mutation = useMutation((data: ListPatchItem) =>
    PostRepository.patchPost(data)
  );
  return mutation;
};

export const useDeletePostMutation = () => {
  const mutation = useMutation((postId: number) =>
    PostRepository.deletePost(postId)
  );

  return mutation;
};
