import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { ListItemResponse } from "@/src/types/List/list.type";
import UserApi from "./api";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";

export const useGetMyInfoQuery = () =>
  useQuery(QUERY_KEYS.User.getMyInfo, () => UserApi.getMyInfoApi(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetMyPostQuery = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(QUERY_KEYS.User.getMyPost, () => UserApi.getMyPostApi(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
