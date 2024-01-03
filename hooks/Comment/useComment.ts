import { Dispatch, SetStateAction, useState } from "react";
import {
  usePostCommentMutation,
  useDeleteCommentMutation,
  usePatchCommentMutation,
} from "../../queries/Comment/comment.query";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";

export const useComment = () => {
  const [content, setContent] = useState("");
  const { queryInvalidates } = useQueryInvalidates();

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
      return window.alert("댓글을 입력해주세요!");
    }

    postComment.mutate(
      { content, postId },
      {
        onSuccess: () => {
          queryInvalidates([["comment/read", postId]]);
          window.alert("댓글을 작성하였습니다!");
          setContent("");
        },
        onError: (e) => {
          window.alert("댓글을 작성하지 못했습니다!");
        },
      }
    );
  };

  const handleEditComment = (
    commentId: number,
    postId: number,
    prevContent: string,
    setIsEditComment: Dispatch<
      SetStateAction<{ isEdit: boolean; commentId: number }>
    >
  ) => {
    if (content.trim() === "") {
      window.alert("댓글이 공백입니다!");
      return;
    }
    if (content === prevContent) {
      window.alert("댓글을 수정해주세요!");
      return;
    }

    const answer = window.confirm("해당 댓글을 수정하시겠습니까?");

    if (answer) {
      editComment.mutate(
        { content, commentId },
        {
          onSuccess: () => {
            queryInvalidates([["comment/read", postId]]);
            window.alert("댓글을 수정하였습니다!");
            setIsEditComment((prev) => ({
              ...prev,
              isEdit: false,
              commentId: -1,
            }));
          },
          onError: (e) => {
            window.alert("댓글을 수정하지 못했습니다!");
          },
        }
      );
    }
  };

  const handleDeleteComment = (commentId: number, postId: number) => {
    const answer = window.confirm("해당 댓글을 삭제하시겠습니까?");

    if (answer) {
      deleteComment.mutate(commentId, {
        onSuccess: () => {
          queryInvalidates([["comment/read", postId]]);
          window.alert("댓글을 삭제하였습니다!");
        },
        onError: (e) => {
          window.alert("댓글을 삭제하지 못했습니다!");
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