import { useQuery, UseQueryOptions } from "react-query";
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
) => {
  return useQuery(QUERY_KEYS.Post.getAllPost, () => PostApi.getAllPostApi(), {
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
    () => PostApi.getPostByIdApi(postId),
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
  useQuery(
    QUERY_KEYS.Post.getPostByTag(tag),
    () => PostApi.getPostByTagApi(tag),
    {
      enabled: !!tag,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
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
) =>
  useQuery(
    QUERY_KEYS.Post.getPostByKeyWord(keyword),
    () => PostApi.getPostByKeyWordApi(keyword),
    {
      enabled: !!keyword,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );
