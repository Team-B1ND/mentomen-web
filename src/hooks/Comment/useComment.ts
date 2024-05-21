import {
  useDeleteCommentMutation,
  usePatchCommentMutation,
  usePostCommentMutation,
} from "@/src/services/Comment/comment.mutation";
import CommentErrorHandler from "@/src/stories/utils/Error/CommentErrorHandler";
import type { AxiosError } from "axios";
import { type Dispatch, type SetStateAction, useState } from "react";
import { QUERY_KEYS } from "../../stories/core";
import { MenToMenToast } from "../../stories/utils";
import { useQueryInvalidates } from "../Invalidates";

export const useComment = (exisitComment?: string) => {
  const [comment, setComment] = useState(exisitComment || "");
  const { queryInvalidates } = useQueryInvalidates();
  const [isSubmitComment, setIsSubmitComment] = useState(false);

  const postComment = usePostCommentMutation();
  const deleteComment = useDeleteCommentMutation();
  const editComment = usePatchCommentMutation();

  /**
   * 댓글을 작성하다가 취소를 누르면 댓글 value를 공백으로 바꾸는데
   * 이때 chrome에서는 input 깜빡임이 사라지지만 safari에서는 input 깜빡임이 안 사라지기 때문에
   * 아래 메서드를 만들었음
   */
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
          const errorCode = e as AxiosError;
          MenToMenToast.showError(
            CommentErrorHandler.deleteComment(errorCode.response?.status!)
          );
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
            const errorCode = e as AxiosError;
            MenToMenToast.showError(
              CommentErrorHandler.modifyComment(errorCode.response?.status!)
            );
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
            const errorCode = e as AxiosError;
            MenToMenToast.showError(
              CommentErrorHandler.registComment(errorCode.response?.status!)
            );
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
