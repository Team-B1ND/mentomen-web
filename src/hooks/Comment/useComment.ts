import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { usePostComment } from "../../queries/Comment/comment.query";

export const useComment = () => {
  const postComment = usePostComment();
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          setContent("");
        },
        onError: (e) => {
          B1ndToast.showError("댓글을 등록하지 못했습니다!");
        },
      }
    );
  };

  return { content, handleCommentChange, handleCommentSubmit };
};
