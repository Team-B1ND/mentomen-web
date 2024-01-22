import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { ListResponse } from "@/src/types/List/list.type";
import { ListItemResponse } from "@/src/types/List/list.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import PostApi from "./api";

export const useGetAllPostQuery = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string
  >
): UseQueryResult<ListItemResponse, AxiosError> => {
  return useQuery(QUERY_KEYS.Post.getAllPost, () => PostApi.getAllPostApi(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
};

export const useGetPostByIdQuery = (
  postId: number,
  options?: UseQueryOptions<
    ListResponse,
    AxiosError,
    ListResponse,
    (string | number)[]
  >
): UseQueryResult<ListResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Post.getPostById(postId),
    () => PostApi.getPostByIdApi(postId),
    {
      ...options,
      enabled: !!postId,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetPostByTagQuery = (
  tag: string,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string[]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Post.getPostByTag(tag),
    () => PostApi.getPostByTagApi(tag),
    {
      ...options,
      enabled: !!tag,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetPostByKeyWordQuery = (
  keyword: string,
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string[]
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Post.getPostByKeyWord(keyword),
    () => PostApi.getPostByKeyWordApi(keyword),
    {
      ...options,
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
