import { useMutation } from "react-query";
import DeleteRepository from "../../repository/del/del.repository";
import { ParamType } from "../../types/param/param.type";

export const useDelPost = () => {
    const mutation = useMutation('/post/delete',
    ({postId}:ParamType)=>
        DeleteRepository.delPost({postId}));
    return mutation;
}