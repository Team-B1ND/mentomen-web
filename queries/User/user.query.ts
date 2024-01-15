import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import UserRepository from "@/repositories/User/user.repository";
import { ListItemResponse } from "@/types/List/list.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyInfo = () =>
  useQuery(QUERY_KEYS.User.getMyInfo, () => UserRepository.getMyInfo(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetMyPost = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    string
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery(QUERY_KEYS.User.getMyPost, () => UserRepository.getMyPost(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
