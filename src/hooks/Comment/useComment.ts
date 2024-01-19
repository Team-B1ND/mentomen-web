import { MenToMenToast } from "@/util/Toast/menToMenToast";
import { Dispatch, SetStateAction, useState } from "react";
import {
  usePostCommentMutation,
  useDeleteCommentMutation,
  usePatchCommentMutation,
} from "@/queries/Comment/comment.query";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { QUERY_KEYS } from "@/queries/queryKey";

export const useComment = (exisitComment?: string) => {
  const [comment, setComment] = useState(exisitComment || "");
  const { queryInvalidates } = useQueryInvalidates();
  const [isSubmitComment, setIsSubmitComment] = useState(false);

  const postComment = usePostCommentMutation();
  const deleteComment = useDeleteCommentMutation();
  const editComment = usePatchCommentMutation();

  const handleRenderCommentInput = () => {
    setIsSubmitComment(true);
    setTimeout(() => {
      setIsSubmitComment(false);
    }, 10);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setComment(e.currentTarget.innerText!);
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
    e: React.FormEvent<HTMLButtonElement>,
    postId: number,
    setIsActiveCommentInput: Dispatch<SetStateAction<boolean>>,
    commentId?: number,
    closeCommentInput?: () => void
  ) => {
    e.preventDefault();
    // exisitComment가 있으면 댓글 수정
    if (exisitComment) {
      if (exisitComment === comment.trim()) {
        return MenToMenToast.showInfo("댓글을 수정해주세요!");
      }

      editComment.mutate(
        { content: comment.trim(), commentId: commentId! },
        {
          onSuccess: () => {
            MenToMenToast.showSuccess("댓글을 수정하였습니다!");
            queryInvalidates([QUERY_KEYS.Comment.getComment(postId)]);

            setIsActiveCommentInput(false);
            setComment("");
            closeCommentInput!();
          },
          onError: (e) => {
            MenToMenToast.showError("댓글을 수정하지 못하였습니다.");
          },
        }
      );
    } else {
      postComment.mutate(
        { content: comment.trim(), postId },
        {
          onSuccess: () => {
            MenToMenToast.showSuccess("댓글을 작성하였습니다!");
            queryInvalidates([QUERY_KEYS.Comment.getComment(postId)]);

            setIsActiveCommentInput(false);
            setComment("");

            handleRenderCommentInput();
          },
          onError: (e) => {
            MenToMenToast.showError("댓글을 등록하지 못하였습니다.");
          },
        }
      );
    }
  };

  return {
    isSubmitComment,
    setIsSubmitComment,

    comment,
    setComment,

    handleCommentChange,
    handleDeleteComment,
    handleRenderCommentInput,
    handleCommentSubmit,
  };
};
