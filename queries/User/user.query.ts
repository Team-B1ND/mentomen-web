import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import UserRepository from "@/repositories/User/user.repository";
import { ListItemResponse } from "@/types/List/list.type";

export const useGetMyInfo = () =>
  useQuery("user/my", () => UserRepository.getMyInfo(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetMyPost = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    "user/post"
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery("user/post", () => UserRepository.getMyPost(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
