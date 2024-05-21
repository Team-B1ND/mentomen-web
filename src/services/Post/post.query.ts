import { useQuery, UseQueryOptions } from "react-query";
import { AxiosError } from "axios";
import { PostApi } from "./post.api";
import { PostItemResponse, PostResponse, QUERY_KEYS } from "@/src/stories/core";

export const useGetAllPostQuery = (
  options?: UseQueryOptions<
    PostItemResponse,
    AxiosError,
    PostItemResponse,
    string
  >
) => {
  return useQuery(QUERY_KEYS.Post.getAllPost, () => PostApi.getAllPost(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
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
) =>
  useQuery(
    QUERY_KEYS.Post.getPostById(postId),
    () => PostApi.getPostById(postId),
    {
      enabled: !!postId,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
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
) =>
  useQuery(QUERY_KEYS.Post.getPostByTag(tag), () => PostApi.getPostByTag(tag), {
    enabled: !!tag,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetPostByKeyWordQuery = (
  keyword: string,
  options?: UseQueryOptions<
    PostItemResponse,
    AxiosError,
    PostItemResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.Post.getPostByKeyWord(keyword),
    () => PostApi.getPostByKeyWord(keyword),
    {
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );
