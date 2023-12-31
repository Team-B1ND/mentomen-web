import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import ListRepository from "../../repositories/Post/post.repository";
import {
  ListPatchItem,
  ListResponse,
  PostSubmitType,
} from "../../types/List/list.type";
import { ListItemResponse } from "../../types/List/list.type";
import { AxiosError } from "axios";

export const useGetList = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    "list/useGetList"
  >
): UseQueryResult<ListItemResponse, AxiosError> => {
  return useQuery("list/useGetList", () => ListRepository.getPost(), {
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
    ["post/read-one", number]
  >
): UseQueryResult<ListResponse, AxiosError> =>
  useQuery(
    ["post/read-one", postId],
    () => ListRepository.getPostById(postId),
    {
      ...options,
      enabled: !!postId,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePostMySubmitMutation = () => {
  const mutation = useMutation("post/submit", (data: PostSubmitType) =>
    ListRepository.postMySubmit(data)
  );
  return mutation;
};

export const useGetTag = (
  tag: string,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    ["post/GetTagQuery", string]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(["post/GetTagQuery", tag], () => ListRepository.getPostByTag(tag), {
    ...options,
    enabled: !!tag,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetKeyWord = (
  keyword: string,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    ["search/keyword", string]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(
    ["search/keyword", keyword],
    () => ListRepository.getPostByKeyWord(keyword),
    {
      ...options,
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePatchMyPostMutation = () => {
  const mutation = useMutation((data: ListPatchItem) =>
    ListRepository.patchMyPost(data)
  );
  return mutation;
};

export const useDeletePostMutation = () => {
  const mutation = useMutation((postId: number) =>
    ListRepository.deletePost(postId)
  );

  return mutation;
};
