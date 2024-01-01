import { B1ndToast } from "@b1nd/b1nd-toastify";
import { Dispatch, SetStateAction, useState } from "react";
import { useQueryClient } from "react-query";
import {
  usePostCommentMutation,
  useDeleteCommentMutation,
  usePatchCommentMutation,
} from "../../queries/Comment/comment.query";

export const useComment = () => {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const postComment = usePostCommentMutation();
  const deleteComment = useDeleteCommentMutation();
  const editComment = usePatchCommentMutation();

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent(e.target.value);
  };

  const handleCommentSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    postId: number
  ) => {
    e.preventDefault();

    if (content.trim() === "") {
      return B1ndToast.showInfo("댓글을 입력해주세요!");
    }

    postComment.mutate(
      { content, postId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["comment/read", postId]);
          B1ndToast.showSuccess("댓글을 작성하였습니다!");
          setContent("");
        },
        onError: (e) => {
          B1ndToast.showError("댓글을 작성하지 못했습니다!");
        },
      }
    );
  };

  const handleEditComment = (
    commentId: number,
    prevContent: string,
    setIsEditComment: Dispatch<
      SetStateAction<{ isEdit: boolean; commentId: number }>
    >
  ) => {
    if (content.trim() === "") {
      B1ndToast.showInfo("댓글이 공백입니다!");
      return;
    }
    if (content === prevContent) {
      B1ndToast.showInfo("댓글을 수정해주세요!");
      return;
    }

    const answer = window.confirm("해당 댓글을 수정하시겠습니까?");

    if (answer) {
      editComment.mutate(
        { content, commentId },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["comment/read", commentId]);
            B1ndToast.showSuccess("댓글을 수정하였습니다!");
            setIsEditComment((prev) => ({
              ...prev,
              isEdit: false,
              commentId: -1,
            }));
          },
          onError: (e) => {
            B1ndToast.showError("댓글을 수정하지 못했습니다!");
          },
        }
      );
    }
  };

  const handleDeleteComment = (commentId: number) => {
    const answer = window.confirm("해당 댓글을 삭제하시겠습니까?");

    if (answer) {
      deleteComment.mutate(commentId, {
        onSuccess: () => {
          queryClient.invalidateQueries(["comment/read", commentId]);
          B1ndToast.showSuccess("댓글을 삭제하였습니다!");
        },
        onError: (e) => {
          B1ndToast.showError("댓글을 삭제하지 못했습니다!");
        },
      });
    }
  };

  return {
    content,
    setContent,

    handleCommentChange,
    handleCommentSubmit,
    handleEditComment,
    handleDeleteComment,
  };
};
