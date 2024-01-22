import { PostPatchItem, PostSubmitType } from "@/src/types/Post/post.type";
import { useMutation } from "react-query";
import PostApi from "./api";

export const usePostMySubmitMutation = () => {
  const mutation = useMutation((data: PostSubmitType) =>
    PostApi.postSubmitApi(data)
  );
  return mutation;
};

export const usePatchMyPostMutation = () => {
  const mutation = useMutation((data: PostPatchItem) =>
    PostApi.patchPostApi(data)
  );
  return mutation;
};

export const useDeletePostMutation = () => {
  const mutation = useMutation((postId: number) =>
    PostApi.deletePostApi(postId)
  );
  return mutation;
};
