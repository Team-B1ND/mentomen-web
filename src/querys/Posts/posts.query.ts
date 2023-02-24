import { useMutation, useQuery } from "react-query";
import postRepository from "../../repository/post/post.repository";
import userRepository from "../../repository/user/user.repository";
import { ParamType } from "../../types/param/param.type";
import { PostSubmitType } from "../../types/list/list.type";

export const useGetApost = ({postId}:ParamType) =>
    useQuery('post/read-one',() => userRepository.getApost({postId}),{
        staleTime: 1000 * 60,
        cacheTime: 1000 * 60,
    });

export function usePostMySubmit(){
    const mutation = useMutation('/post/submit',(data:PostSubmitType)=>
        postRepository.postMySubmit(data));
    return mutation;
}