import { useQuery } from "react-query";
import UserRepository from "../../repository/user/user.repository";


export const useUserInfo = () => 
    useQuery('/user/my',() => UserRepository.getUser());

export const useMyPost = () => 
    useQuery('/user/post',() => UserRepository.myPost());