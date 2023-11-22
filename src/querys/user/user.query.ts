import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import UserRepository from "../../repositories/User/user.repository";
import { ListItemResponse } from "../../types/List/list.type";

export const useUserInfo = () =>
  useQuery("user/my", () => UserRepository.getUser());

export const useMyPost = (
  options?: UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    "user/post"
  >
): UseQueryResult<ListItemResponse, AxiosError> =>
  useQuery("user/post", () => UserRepository.myPost(), {
    ...options,
  });
