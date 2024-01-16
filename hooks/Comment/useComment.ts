import { MenToMenToast } from "@/util/Toast/menToMenToast";
import { Dispatch, SetStateAction, useState } from "react";
import {
  usePostCommentMutation,
  useDeleteCommentMutation,
  usePatchCommentMutation,
} from "@/queries/Comment/comment.query";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { QUERY_KEYS } from "@/queries/queryKey";

export const useComment = (isEdit?: boolean) => {
  const [comment, setComment] = useState("");
  const { queryInvalidates } = useQueryInvalidates();

  const postComment = usePostCommentMutation();
  const deleteComment = useDeleteCommentMutation();
  const editComment = usePatchCommentMutation();

  const handleCommentChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setComment(e.currentTarget.textContent as string);
  };

  const handleDeleteComment = (commentId: number, postId: number) => {
    const answer = window.confirm("해당 댓글을 삭제하시겠습니까?");

    if (answer) {
      deleteComment.mutate(commentId, {
        onSuccess: () => {
          queryInvalidates([QUERY_KEYS.Comment.getComment(postId)]);
          MenToMenToast.showSuccess("댓글을 삭제하였습니다!");
        },
        onError: (e) => {
          MenToMenToast.showError("댓글을 삭제하지 못했습니다!");
        },
      });
    }
  };

  const handleCommentSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    postId: number,
    setIsActiveCommentInput: Dispatch<SetStateAction<boolean>>
  ) => {
    e.preventDefault();
    postComment.mutate(
      { content: comment.trimEnd(), postId },
      {
        onSuccess: () => {
          MenToMenToast.showSuccess("댓글을 작성하였습니다!");
          queryInvalidates([QUERY_KEYS.Comment.getComment(postId)]);
          setIsActiveCommentInput(false);
          setComment("");
        },
        onError: (e) => {
          MenToMenToast.showError("댓글을 등록하지 못하였습니다.");
        },
      }
    );
  };

  return {
    comment,
    setComment,

    handleCommentChange,
    handleDeleteComment,
    handleCommentSubmit,
  };
};
