import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { PostResponse } from "@/src/types/Post/post.type";
import { PostItemResponse } from "@/src/types/Post/post.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import PostApi from "./api";

export const useGetAllPostQuery = (
  options?: UseQueryOptions<
    PostItemResponse,
    AxiosError,
    PostItemResponse,
    string
  >
): UseQueryResult<PostItemResponse, AxiosError> => {
  return useQuery(QUERY_KEYS.Post.getAllPost, () => PostApi.getAllPostApi(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
};

export const useGetPostByIdQuery = (
  postId: number,
  options?: UseQueryOptions<
    PostResponse,
    AxiosError,
    PostResponse,
    (string | number)[]
  >
): UseQueryResult<PostResponse, AxiosError> =>
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
    PostItemResponse,
    AxiosError,
    PostItemResponse,
    string[]
  >
): UseQueryResult<PostItemResponse, AxiosError> =>
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
    PostItemResponse,
    AxiosError,
    PostItemResponse,
    string[]
  >
): UseQueryResult<PostItemResponse, AxiosError> =>
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
