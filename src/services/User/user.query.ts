import type { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { UserApi } from "./user.api";
import { type PostItemResponse, QUERY_KEYS } from "@/src/stories/core";

export const useGetMyInfoQuery = () =>
  useQuery(QUERY_KEYS.User.getMyInfo, () => UserApi.getMyInfo(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetMyPostQuery = (
  options?: UseQueryOptions<
    PostItemResponse,
    AxiosError,
    PostItemResponse,
    string
  >
) =>
  useQuery(QUERY_KEYS.User.getMyPost, () => UserApi.getMyPost(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });
