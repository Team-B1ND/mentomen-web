import { useMutation } from "react-query";
import DeleteRepository from "../../repository/Del/del.repository";
import { ParamType } from "../../types/Param/param.type";

export const useDelPost = () => {
  const mutation = useMutation("/post/delete", ({ postId }: ParamType) =>
    DeleteRepository.delPost({ postId })
  );
  return mutation;
};
