import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import ListRepository from "../../repositories/List/list.repository";
import { ParamType } from "../../types/Param/param.type";
import {
  ListPatchItem,
  ListResponse,
  PostSubmitType,
} from "../../types/List/list.type";
import { TagType, KeyWordType } from "../../types/List/list.type";
import { ListItemResponse } from "../../types/List/list.type";
import { AxiosError } from "axios";

export const useGetList = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    ["list/useGetList"]
  >
): UseQueryResult<ListItemResponse, AxiosError> => {
  return useQuery(["list/useGetList"], () => ListRepository.getList(), {
    ...options,
  });
};

export const useGetApost = (
  { postId }: ParamType,
  options?: UseQueryOptions<
    ListResponse,
    AxiosError,
    ListResponse,
    ["post/read-one", number]
  >
): UseQueryResult<ListResponse, AxiosError> =>
  useQuery(
    ["post/read-one", postId],
    () => ListRepository.getPostById({ postId }),
    {
      ...options,
      enabled: !!postId,
      staleTime: 60,
      cacheTime: 60,
    }
  );

export const usePostMySubmit = () => {
  const mutation = useMutation("post/submit", (data: PostSubmitType) =>
    ListRepository.postMySubmit(data)
  );
  return mutation;
};

export const useGetTag = (
  { tag }: TagType,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    ["post/GetTagQuery", string]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(
    ["post/GetTagQuery", tag],
    () => ListRepository.getPostByTag({ tag }),
    {
      ...options,
      enabled: !!tag,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );

export const useGetKeyWord = (
  { keyword }: KeyWordType,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    ["search/keyword", string]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(
    ["search/keyword", keyword],
    () => ListRepository.getPostByKeyWord({ keyword }),
    {
      ...options,
      enabled: !!keyword,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    }
  );

export const usePatchMyPost = () => {
  const mutation = useMutation("post/update", (data: ListPatchItem) =>
    ListRepository.patchMyPost(data)
  );
  return mutation;
};
