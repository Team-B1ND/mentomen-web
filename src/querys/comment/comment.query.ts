import { useMutation } from "react-query";
import commentRepository from "../../repository/comment/comment.repository";
import { commentType } from "../../types/comment/comment.type";

export const usePostComment = () =>{
    const mutation = useMutation('comment/submit',
    ({content,postId}:commentType)=>
        commentRepository.postComment({content,postId}));
        
    return mutation;
}