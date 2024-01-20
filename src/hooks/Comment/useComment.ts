import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import {
  useDeleteCommentMutation,
  usePatchCommentMutation,
  usePostCommentMutation,
} from "@/src/services/Comment/mutations";
import { MenToMenToast } from "@/src/utils/Toast/menToMenToast";
import { Dispatch, SetStateAction, useState } from "react";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";

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

  const handleCommentChange = (e: React.FormEvent<HTMLSpanElement>) => {
    setComment(e.currentTarget.innerText.trim()!);
  };

  const handleDeleteComment = (commentId: number, postId: number) => {
    const answer = window.confirm("해당 댓글을 삭제하시겠습니까?");

    if (answer) {
      deleteComment.mutate(commentId, {
        onSuccess: () => {
          queryInvalidates([QUERY_KEYS.Comment.getComment(postId)]);
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

    if (comment.trim() === "") {
      return MenToMenToast.showInfo("댓글을 입력해주세요!");
    }

    // exisitComment가 있으면 댓글 수정
    if (exisitComment) {
      if (exisitComment === comment.trim()) {
        return MenToMenToast.showInfo("댓글을 수정해주세요!");
      }

      editComment.mutate(
        { content: comment.trim(), commentId: commentId! },
        {
          onSuccess: () => {
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
