import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import UserRepository from "../../repository/user/user.repository";
import { ListItemResponse } from "../../types/list/list.type";


export const useUserInfo = () => 
    useQuery('user/my',() => UserRepository.getUser());

export const useMyPost = (
    options?:UseQueryOptions<
    ListItemResponse,
    AxiosError,
    ListItemResponse,
    'user/post'>
    ):UseQueryResult<ListItemResponse,AxiosError> => 
    useQuery('user/post',() => UserRepository.myPost(),{
        ...options,
    });