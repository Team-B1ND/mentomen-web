import { useMutation, useQuery } from "react-query";
import commentRepository from "../../repository/comment/comment.repository";
import { postCommentType } from "../../types/comment/comment.type";
import { ParamType } from "../../types/param/param.type";

export const usePostComment = () => {
    const mutation = useMutation('comment/submit',
    ({content,postId}:postCommentType)=>
        commentRepository.postComment({content,postId}));
        
    return mutation;
}

export const useGetComment = ({postId}:ParamType) => 
    useQuery('comment/read',()=>commentRepository.getComment({postId}));