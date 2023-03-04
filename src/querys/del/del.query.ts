import { useMutation } from "react-query";
import deleteRepository from "../../repository/del/del.repository";
import { ParamType } from "../../types/param/param.type";

export const useDel = () => {
    const mutation = useMutation('/post/delete',
    ({postId}:ParamType)=>
        deleteRepository.delPost({postId}));
    return mutation;
}