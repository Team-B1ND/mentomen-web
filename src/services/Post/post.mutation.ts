import type { PostPatchItem, PostSubmitType } from "@/src/stories/core";
import { useMutation } from "react-query";
import { PostApi } from "./post.api";

export const usePostMySubmitMutation = () => {
  const mutation = useMutation((data: PostSubmitType) =>
    PostApi.registPost(data)
  );
  return mutation;
};

export const usePatchMyPostMutation = () => {
  const mutation = useMutation((data: PostPatchItem) =>
    PostApi.patchPost(data)
  );
  return mutation;
};

export const useDeletePostMutation = () => {
  const mutation = useMutation((postId: number) => PostApi.deletePost(postId));
  return mutation;
};
